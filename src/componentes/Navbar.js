import {Link} from 'react-router-dom'
import MostrarDatos from '../pages/MostrarDatos'
import Registrar from '../pages/Registrar'

const Navbar = (cerrarSesion) => {


    return (
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container-fluid">
        <Link to='/'>
          <img src={require ("../image/utslogo.png")}  width='70' />
        </Link>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavDropdown">

          <ul class="nav navbar-nav mx-auto">
            <li class="nav-item">
              <Link className="nav-link" to ='/registrar'>Registrar</Link>
            </li>
            <li class="nav-item">
            <Link className="nav-link"to ='/mostrardatos'>Mostrar Datos</Link>
            </li>    
            <li class="nav-item">
              <a className="nav-link  h5  text-center"  style={{color:"red"}}  href=" "  onClick={cerrarSesion } >Cerrar Sesión</a>
            </li>
      
          </ul>
        </div>
      </div>
    </nav>

    )
}
export default Navbar