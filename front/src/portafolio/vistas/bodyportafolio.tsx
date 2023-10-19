import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import '../css/portfolio.css'
import FooterComp from '../componentes/footer';
import Navbar from './navbar';
// import * as THREE from "https://cdn.skypack.dev/three@0.136.0";
// import THREE from 'https://cdn.skypack.dev/three';
// import * as THREE from 'https://cdn.skypack.dev/react';
// import * as THREE from 'three';
// import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
// import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';





export const Bodyportafolio: React.FC = () => {
    console.clear();
    // start galaxy

    // let scene = new THREE.Scene();

    // scene.background = new THREE.Color(0x160016);

    // let camera = new THREE.PerspectiveCamera(60, innerWidth / innerHeight, 1, 10060);

    // camera.position.set(0, 4, 21);

    // let renderer = new THREE.WebGLRenderer();
    // renderer.setSize(innerWidth, innerHeight);

    // document.body.appendChild(renderer.domElement);

    // window.addEventListener("resize", event => {
    //     camera.aspect = innerWidth / innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(innerWidth, innerHeight);
    // })


    // let controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.enablePan = false;

    // let gu = {
    //     time: { value: 0 }
    // }
    // // 

    // let sizes = [];
    // let shift = [];
    // let pushShift = () => {
    //     shift.push(
    //         Math.random() * Math.PI,
    //         Math.random() * Math.PI * 2,
    //         (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
    //         Math.random() * 0.9 + 0.1
    //     );
    // }

    // let pts = new Array(50000).fill(10, 1, 3).map(p => {
    //     sizes.push(Math.random() * 1.5 + 0.5);
    //     return new THREE.Vector3().randomDirection().multiplyscalar(Math.random() * 0.5 + 9.5);
    // });

    // for (let i = 0; i < 100000; i++) {
    //     let r = 10, R = 40;
    //     let rand = Math.pow(Math.random(), 1.5);
    //     let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
    //     pts.push(new THREE.Vector3().setFromCylindricalCoords(radius,
    //         Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2));
    //     sizes.push(Math.random() * 1.5 + 0.5);
    //     pushShift();
    // }

    // here end galaxy


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
            <Navbar />
            <div className="row" style={{ color: "white", background: "" }}>
                <div className="col-md-6" style={{ color: "white", background: "" }}>

                    <section className='home1'>
                        <div className="home-content">
                            <h1>Hello!, I'm Bryan Ruiz</h1>
                            <h3>Software Engenieer</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit dui, lacinia vitae tellus et, convallis vehicula dolor. Integer vitae vulputate libero. Mauris ac sodales lectus, ac posuere est.Integer eget scelerisque lorem, vitae efficitur magna. Praesent viverra bibendum pretium. Nunc neque orci, egestas et ipsum id, ultricies porta nisi. Donec ac maximus ex, eu ornare turpis. Etiam imperdiet maximus lorem non aliquet.
                            </p>
                            <div className="btn-box">
                                <a href='#'>Hire me!</a>
                                <a href='#'>Let's Talk</a>
                            </div>
                        </div>
                    </section>

                </div>
                <div className="col-md-6" style={{ color: "white", background: "" }}>
                    aqui
                </div>
            </div>

            {/* <button type="button" className="btn btn-primary">Primary</button> */}

            <FooterComp />
        </div>
    </div>);
};



export default Bodyportafolio;