import { Route, Routes, useNavigate } from "react-router-dom";
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

  return (<>
  <a className='alv'></a>
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


    <nav className="sidedos">
      <div className="text header-text" >
        <a href="#" className="linksto" onClick={()=>{}}>Home</a>
        <a href="#" className="linksto" onClick={()=>{}}>About-me</a>
        <a href="#" className="linksto" onClick={()=>{}}>Experience</a>
        <a href="#" className="linksto" onClick={()=>{}}>School</a>
      </div>
    </nav>

  </>
  );
}

export default Navbar;


