import { Route, Routes, useNavigate } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./vistas/navbar";
import Bodyportafolio from "./vistas/bodyportafolio";



export const HomePage: React.FC = () => {


  return (<>

    {/* <div className="container"> */}

    <Bodyportafolio />
    {/* <Navbar/> */}
    {/* </div> */}

  </>
  );
};
export default HomePage;