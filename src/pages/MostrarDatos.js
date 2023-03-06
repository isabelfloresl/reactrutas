import { useState } from "react"
import CrudForm from "./CrudForm"
import CrudTable from "./CrudTable"
import Navbar from "../componentes/Navbar"
import "../App.css"

const initialDb = [
    {
        id: 0,
        name: 'Isabel',
        lastname:'Flores'
    },
    {
        id:1,
        name:'Alejandra',
        lastname:'Lumbrera'
    },
]
const MostrarDatos = (props) => {
 
    function cerrarSesion (){
        document.getElementById("mostrardatos").style.display ="none"
        document.getElementById("form-login").style.display = "block"
        document.getElementById("txtusuario").value = ""
        document.getElementByIdU("txtpass").value = ""
        document.getElementById("txtusuario").focus()
    }
      
  
    const [db, setDb] = useState (initialDb)

    const [dataToEdit,setDataToEdit] =useState (null)
    const createData=(data)=>{
        data.id=initialDb.length;
        // console.log(data)
        setDb([...db,data])
    };
    const updateData=(data)=>{
        let newData = db.map(item=> item.id === data.id?data:item)
        setDb(newData)
    }
    const deleteData=(id)=>{
        let eliminar = db.filter(item=>item.id!==id)
        setDb(eliminar)
    }
    return (
       
        <div>
            <Navbar/>
    
            <h1>Bienvenido/a, {props.usuario} </h1>
            <CrudForm create={createData} update={updateData} dataToEdit={dataToEdit} setDataToEdit={setDataToEdit}/>

            <CrudTable data={db} setDataToEdit={setDataToEdit} deleteData={deleteData}/>
    
        </div>
    )
}
export default MostrarDatos