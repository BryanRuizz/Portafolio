import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './portafolio/Homepage';
import Navbar from './portafolio/vistas/navbar';
import '../src/index.css'
// import LunaComponent from './portafolio/componentes/luna';
// import 'atropos/css'
// import Atropos from 'atropos/react';

function App() {
  return (
    <div className="App">

     


      <BrowserRouter>
        <Routes>
          {/* <Route path={'/Navbar'} element={<Navbar/>}/>    */}
          <Route path={'*'} element={<HomePage />} />
          {/* <Route path={'/'} element={<Login />} />
        <Route path={'*'} element={<HomePage />} />
        <Route path={'/Menu'} element={<HomeRoute />}/>
        <Route path={'/LlantasDashboard/*'} element={<LlantasIndex/>} />
        <Route path={'/EntradaSalida/*'} element={<EntradaSalidaIndex/>} />
        <Route path={'/Incidencia/*'} element={<IncidenciaIndex/>}/> */}
        </Routes>
      </BrowserRouter>
      <div className='container' style={{background:"white"}}>
        <h1>ALV</h1>
      </div>
    </div>
  );
}

export default App;
