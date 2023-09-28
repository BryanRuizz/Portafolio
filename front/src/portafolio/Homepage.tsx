import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import Navbar from "./vistas/navbar";
import Bodyportafolio from "./vistas/bodyportafolio";


export const HomePage: React.FC = () => {


  return (<>
    <Navbar/>
        <div className="container">
        <Bodyportafolio />
          </div>
  
  </>
  );
};
export default HomePage;