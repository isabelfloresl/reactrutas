import { useState } from "react"
import MostrarDatos from "./MostrarDatos"
import "../App.css"



const Login = () => {

const [miLogin, setLogin] = useState("false")
const [usuario, setUsuario] = useState ("")
const [pass, setPass] = useState("")

function iniciarSesion (e) {
    e.preventDefault() 
    var txtusuario = document.getElementById("txtusuario").value
    var txtpass = document.getElementById("txtpass").value

    if(usuario.length === 0 || pass.length=== 0){
        alert("Datos incompletos")
    }else {
        if (usuario=== "Isabel" && pass === "123") {
            setLogin("true")
            document.getElementById("form-login").style.display ="none"
        }else {
            setLogin("false")
            alert ("Usuario y/o contraseña incorrecta")
            document.getElementById ("txtusuario").value = ""
            document.getElementById("txtpass").value = ""
            document.getElementById("txtusuario").focus()
        }
    }
}

return(

    <div >
      <br></br>

      <form id="form-login"class="row gx-2 gy-2 align-items-center">
      <h3> Iniciar sesión</h3>
      <div class="row mb-3" >
    <label for="inputEmail3" class="col-sm-0 col-form-label">Usuario</label>
    <div class="col-sm-3" >
      <input type="text" class="form-control" id="txtusuario" onChange={ (e) => setUsuario(e.target.value)} required/>
    </div>
  </div>
  <div class="row mb-3">
    <label for="inputPassword3" class="col-sm-0 col-form-label">Contraseña</label>
    <div class="col-sm-3">
      <input type="password" class="form-control" id="txtpass" onChange={(e) => setPass (e.target.value)} required/>
    </div>
  </div>
  <div class="col-auto">
    <button type="submit" class="btn btn-dark" value="login" onClick={iniciarSesion} >Iniciar</button>
    
  </div>
</form>

{miLogin === "true" && <MostrarDatos usuario = {usuario}/> }

</div>

    
    )
}
export default Login