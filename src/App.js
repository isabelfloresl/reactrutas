import {BrowserRouter, Route, Routes} from 'react-router-dom'

import Navbar from './componentes/Navbar';
import { useState } from 'react';
import Login from './pages/Login';
import Registrar from './pages/Registrar';
import MostrarDatos from './pages/MostrarDatos';

function App() {


  return (

    <BrowserRouter>
    
    <Routes>

      <Route path='/' element={<Login/> } />
      <Route path='/registrar' element= {<Registrar/>}></Route>
      <Route path='/mostrardatos' element = {<MostrarDatos/> } />

    </Routes>
    
    </BrowserRouter>
  );
}

export default App;
