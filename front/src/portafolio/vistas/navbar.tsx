import { Route, Routes, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "../../portafolio/css/sidebar.css"
import { AiFillHome, AiOutlineFormatPainter } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { BiHomeAlt2, BiSolidUser } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { PiMoonStars } from "react-icons/pi";
import { FaRegLightbulb, FaUserSecret } from "react-icons/fa";

export const Navbar: React.FC = () => {
  // const [defalut, setDefault] = useState<boolean>(true);
  const [clicked, setClicked] = useState<boolean>(false);
  const body: HTMLBodyElement | null = document.querySelector('body');

  const [old, setOld] = useState('');

  const mode = (num: number) => {
    if (num === 1) {
      setClicked(true);
      setOld(document.body.style.background)
      document.body.style.background = 'white';
      document.body.style.transition = '2s';

    }
    if (num === 2) {
      setClicked(false);
      document.body.style.background = old;
    }

    console.log("ggs");
  }



  document.addEventListener("DOMContentLoaded", () => {
    // Selecciona el elemento de "Theme" por clase
    const themeSwitch = document.querySelector(".theme-switch") as HTMLLIElement;  // Hacer casting a HTMLLIElement

    // Asegúrate de que el elemento existe
    if (themeSwitch) {
        // Agrega un eventListener para cambiar el estilo al pasar el cursor sobre el elemento
        themeSwitch.addEventListener("mouseover", () => {
            // Cambia el estilo al pasar el cursor sobre el elemento
            themeSwitch.style.backgroundColor = "rgb(96, 104, 135)";
            themeSwitch.style.opacity = "0.5";
            // Agrega otros cambios de estilo según tus necesidades
        });

        // Agrega un eventListener para restaurar el estilo cuando el cursor se retira del elemento
        themeSwitch.addEventListener("mouseout", () => {
            // Restaura el estilo al quitar el cursor del elemento
            themeSwitch.style.backgroundColor = "rgba(0, 0, 0, 0)";
            themeSwitch.style.opacity = "0";
            // Restaura otros cambios de estilo según tus necesidades
        });
    }
});





  return (<>
    {/* <a className="m2"></a>
    <nav className="sidebar" style={{}}>

      <header>
        <div className="text header-text " >
          <span className="Home"><BiHomeAlt2 /></span>
          <span className="Home"><FaUserSecret /></span>
          <span className="Home"><BsFillBriefcaseFill /></span>
          <span className="Home"><IoIosSchool /></span>
        </div>
      </header>

    </nav> */}



    {clicked === true ? (

      <button className="modelight" style={{ marginTop: "1rem", margin: "2px" }} onClick={() => mode(2)}><AiOutlineFormatPainter /></button>
    ) : (<>
      <a className="m1"></a>
      <button className="mode" style={{ marginTop: "1rem", margin: "2px" }} onClick={() => mode(1)} ><AiOutlineFormatPainter /></button>

    </>
    )}


    <nav className="sidedos" style={{ background: "" }}>

      {/* <div className="right-part">
        <ul>
          <li className="language-switch">
            <a href="/fr/">FR</a>
          </li>
          <li className="theme-switch">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 17 17" width="17" height="17" className="icons-style mini-icons">
              <title>Theme</title>
              <path d="M14.994,7.99a7,7,0,0,1-12.813,3.9,1,1,0,0,1,1.063-1.532,6.139,6.139,0,0,0,1.961.089,6.012,6.012,0,0,0,5.212-4.985,6.067,6.067,0,0,0-.065-2.274A1,1,0,0,1,11.9,2.182,6.985,6.985,0,0,1,14.994,7.99Z"></path>
            </svg>
          </li>
          <li>
            <button className="hamburger-btn" aria-label="Open menu">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" className="icons-style">
                  <title>Menu</title>
                  <circle cx="12" cy="12" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <circle cx="24" cy="12" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <circle cx="36" cy="12" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <circle cx="36" cy="24" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <circle cx="36" cy="36" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <circle cx="24" cy="36" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <circle cx="12" cy="36" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <circle cx="12" cy="24" r="3" opacity="1" transform-origin="0px 0px"></circle>
                  <rect x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="0.75" transform-origin="0px 0px"></rect>
                  <rect x="21" y="21" width="6px" height="6px" rx="3" ry="3" opacity="0.75" transform-origin="0px 0px"></rect>
                </svg>
              </div>
            </button>
          </li>
        </ul>
      </div>

      <div className="cursor-dot"></div>
      <div className="cursor"></div> */}







      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <a href="#" className="linksto" onClick={() => { }}>Home</a>
          </div>
          <div className="col-sm-3">
            <a href="#" className="linksto" onClick={() => { }}>About</a>
          </div>
          <div className="col-sm-3">
            <a href="#" className="linksto" onClick={() => { }}>Experience</a>
          </div>
          <div className="col-sm-3">
            <a href="#" className="linksto" onClick={() => { }}>School</a>
          </div>
          
        </div>
      </div>
    </nav>

  </>
  );
}

export default Navbar;
// 



