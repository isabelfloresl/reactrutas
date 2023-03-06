const RutaPro = () => {
    const [user, setUser] = useState(null);
        const login = () => {
          //peticiones realizadas
          setUser({
            id: 1,
            user: "Isabel",
            permission: 'analize'
          })
        }
        const logout = () => setUser (null)

    return (
        <div></div>
    )
}


/* Botones

{
      user ? (
        <button className='btn btn-danger' onClick={logout}>Logout</button>
      ):
      (<button className='btn btn-primary' onClick={login}>Login</button>)
    }
*/

/* Rutas

<Routes>

      <Route path='/' element={<ProtectedRoute>
        <Inicio/>
      </ProtectedRoute> 
    } />
    {
      <Route path='/analytics' element={
        <ProtectedRoute estaPermitido={!!user && user.permission.includes('analize')}
        redirecTo='/'>
        </ProtectedRoute>
      }></Route>
    }

*/


/* Página inicio 

import { Navigate } from 'react-router-dom'
import Registrar from './Registrar'

const Inicio = ({user}) => {
    if(!user) {
        return <Navigate to='/' />
 
    }
    return (
        <div>Home (public)</div>
    )
}
export default Inicio


*/
