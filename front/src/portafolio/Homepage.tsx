import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import Navbar from "./vistas/navbar";
import Bodyportafolio from "./vistas/bodyportafolio";
// import LunaComponent from "./componentes/luna";
// import LunaComponent from "./componentes/luna";
import '../portafolio/home.css'
import Footerdos from "./componentes/footerdos";


export const HomePage: React.FC = () => {


  return (<>
    {/* <div className="container" ></div> */}
      <Navbar />
      <Bodyportafolio />
      <div className="container" style={{background:"blue"}}>
        <h1>hola dos</h1>
      </div>
  </>
  );
};
export default HomePage;