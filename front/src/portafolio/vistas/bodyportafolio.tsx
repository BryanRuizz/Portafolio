import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import '../css/portfolio.css'
import FooterComp from '../componentes/footer';
import LunaComponent from '../componentes/luna';




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

    return (<>
        <div className='cursor'></div>

        <div className='container' style={{background:"red"}}>
            <h1>HOLA</h1>
        </div>
        <FooterComp />
    </>);
};

export default Bodyportafolio;
