import { useEffect, useState } from "react"

const initialForm = {
    id: null,
    name:'',
    lastname:''
}

const CrudForm = ({create, update, dataToEdit,setDataToEdit}) => {

    const[form,setForm]=useState(initialForm)
    
    useEffect(() => {
        console.log("elementos " + dataToEdit)
        if(dataToEdit){
            setForm(dataToEdit)
        }
        else {
            setForm (initialForm)
        }
    }, [dataToEdit])

    const handleChance=(e)=>{ //console.log(e.target.name + " " + e.target.value)// 
    setForm({
        ...form,
        [e.target.name]: e.target.value,
    })

    }
    const handleSumbit=(e)=>{
        e.preventDefault();
        if (!form.name || !form.lastname){
            alert('Datos incompletos')
            return;
        }
        if (form.id===null){
            create(form)
        }
        else {
            update(form)
        }
        handleReset();
    }
    const handleReset=(e)=>{
        setForm(initialForm);
        setDataToEdit(null);
    }

    return (
       <div>
<h3> {dataToEdit? "Editar" : "Agregar"}</h3>

<form id="mostrardatos" class="row g-3" onSubmit={handleSumbit}>
  <div class="col-md-2">
  <input type='text' class="form-control" name='name' placeholder="Nombre" onChange={handleChance} value={form.name}/>
  </div>
  <div class="col-md-2">
  <input type='text' class="form-control" name='lastname' placeholder="Apellido" onChange={handleChance} value={form.lastname}/>
  </div>
  
  <div class="col-12">
    <button type="submit" class="btn btn-dark">Enviar</button>
    <input type='reset' class="btn btn-dark" value='Limpiar' onClick={handleReset}/>
  </div>
</form>

</div>

    )
}
export default CrudForm