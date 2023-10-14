import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import '../css/portfolio.css'
import FooterComp from '../componentes/footer';
import Navbar from './navbar';






export const Bodyportafolio: React.FC = () => {

    const [data, setData] = React.useState("Not Found");
    //here we are follogin the cursor 
    // const cursor = document.querySelector(".cursor") as HTMLElement;

    useEffect(() => {
        const cursor = document.querySelector('.cursor') as HTMLElement;
        let timeout: any;

        if (cursor) {
            document.addEventListener('mousemove', (e) => {
                let x = e.pageX;
                let y = e.pageY;

                cursor.style.top = y + 'px';
                cursor.style.left = x + 'px';
                cursor.style.display = 'block';
            });

            // Borra el temporizador anterior
            clearTimeout(0);


            timeout = setTimeout(() => {
                console.log("llegando")
                cursor.style.display = 'none';
            }, 1000);

        }


    }, []);

   
    
    


    return (<div className='maincontainer' >
        <div className="container-fluid">
                <Navbar/>
            <div className="row" style={{color:"white", background:""}}>
                <div className="col-md-6" style={{color:"white", background:""}}>
               hola
                </div>
                <div className="col-md-6" style={{color:"white",background:""}}>world</div>
            </div>

            {/* <button type="button" className="btn btn-primary">Primary</button> */}
     
        <FooterComp />
        </div>
        </div>);
};

export default Bodyportafolio;
//    <div className='container-fluid' style={{ border: "2px solid white" }}>
//             <div className="row" style={{ width: "100%" }}>
//                 <div className="col-4" style={{ border: "2px solid white" }}>
//                     One of three
                  
//                 </div>
//                 <div className="col-4" style={{ border: "2px solid white" }}>
//                     One of three columns
//                 </div>
//                 <div className="col-4" style={{ border: "2px solid white" }}>
//                     One of three columns
//                 </div>
//             </div>
//         </div> 