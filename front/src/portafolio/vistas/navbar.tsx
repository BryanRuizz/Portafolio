import { Route, Routes, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Nav } from "react-bootstrap";
import "../../portafolio/css/sidebar.css"
import { AiFillHome } from "react-icons/ai";
import { IoIosSchool } from "react-icons/io";
import { BiSolidUser } from "react-icons/bi";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { PiMoonStars } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa";

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

  return (<>
    <nav className="sidebar" style={{ background: "white" }}>

      <header>
        <div className="text header-text " >
          <span className="Home"><AiFillHome /></span>
          <span className="Home"><BiSolidUser /></span>
          <span className="Home"><IoIosSchool /></span>
          <span className="Home"><BsFillBriefcaseFill /></span>
        </div>
      </header>

    </nav>
    {clicked === true ? (
      // <a href="#" className="mode" >
      //   <span></span>
      //   <span></span>
      //   <span></span>
      //   <span></span> 
      //   <PiMoonStars />
      // </a>
      <button className="modelight" style={{ marginTop: "1rem", margin: "2px" }} onClick={() => mode(2)}><PiMoonStars /></button>
    ) : (<>
      <a className="m1"></a>
      <button className="mode" style={{ marginTop: "1rem", margin: "2px" }} onClick={() => mode(1)} ><FaRegLightbulb /></button>
    
      </>
    )}
  </>
  );
}

export default Navbar;


