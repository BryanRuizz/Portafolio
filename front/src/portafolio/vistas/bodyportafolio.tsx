import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import '../css/portfolio.css'
import FooterComp from '../componentes/footer';
import Navbar from './navbar';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';




export const Bodyportafolio: React.FC = () => {
    console.clear();
    // start galaxy
    // const scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x160016);//background

    // const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 1, 1000);
    // camera.position.set(0, 4, 21);

    // const renderer = new THREE.WebGLRenderer();
    // renderer.setSize(window.innerWidth, window.innerHeight);
    // document.body.appendChild(renderer.domElement);

    // window.addEventListener("resize", event => {
    //     camera.aspect = window.innerWidth / window.innerHeight;
    //     camera.updateProjectionMatrix();
    //     renderer.setSize(window.innerWidth, window.innerHeight);
    // });

    // const controls = new OrbitControls(camera, renderer.domElement);
    // controls.enableDamping = true;
    // controls.enablePan = false;

    // const gu = {
    //     time: { value: 0 }
    // };

    // let sizes = [];
    // let shift: number[] = [];

    // const pushShift = () => {
    //     shift.push(
    //         Math.random() * Math.PI,
    //         Math.random() * Math.PI * 2,
    //         (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
    //         Math.random() * 0.9 + 0.1
    //     );
    // };

    // let pts = new Array(50000).fill(undefined).map(p => {
    //     sizes.push(Math.random() * 1.5 + 0.5);
    //     pushShift();
    //     return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
    // });

    // for (let i = 0; i < 100000; i++) {
    //     let r = 10, R = 40;
    //     let rand = Math.pow(Math.random(), 1.5);
    //     let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
    //     pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2));
    //     sizes.push(Math.random() * 1.5 + 0.5);
    //     pushShift();
    // }

    // const g = new THREE.BufferGeometry().setFromPoints(pts);
    // g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
    // g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));

    // class CustomPointsMaterial extends THREE.PointsMaterial {
    //     constructor() {
    //         super({
    //             size: 0.125,
    //             transparent: true,
    //             depthTest: false,
    //             blending: THREE.AdditiveBlending,
    //         });
    //     }

    //     onBeforeCompile(shader: any) {
    //         shader.uniforms.time = gu.time;
    //         shader.vertexShader = `
    //           uniform float time;
    //           attribute float sizes;
    //           attribute vec4 shift;
    //           varying vec3 vColor;
    //           ${shader.vertexShader}
    //         `.replace(
    //             'gl_PointSize = size;',
    //             'gl_PointSize = size * sizes;'
    //         ).replace(
    //             '#include <color_vertex>',
    //             `#include <color_vertex>
    //             float d = length(abs(position) / vec3(40., 10., 40));
    //             d = clamp(d, 0., 1.);
    //             vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
    //             `
    //         ).replace(
    //             '#include <begin_vertex>',
    //             `#include <begin_vertex>
    //             float t = time;
    //             float moveT = mod(shift.x + shift.z * t, 6.28319);
    //             float moveS = mod(shift.y + shift.z * t, 6.28319);
    //             transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.a;
    //             `
    //         );

    //         console.log(shader.vertexShader);
    //         shader.fragmentShader = `
    //           varying vec3 vColor;
    //           ${shader.fragmentShader}
    //         `.replace(
    //             '#include <clipping_planes_fragment>',
    //             `#include <clipping_planes_fragment>
    //             float d = length(gl_PointCoord.xy - 0.5);
    //             //if (d > 0.5) discard;
    //             `
    //         ).replace(
    //             'vec4 diffuseColor = vec4( diffuse, opacity );',
    //             'vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d)/* * 0.5 + 0.5*/ );'
    //         );
    //         console.log(shader.fragmentShader);

    //     }
    // }

    // const customMaterial = new CustomPointsMaterial();
    // const p = new THREE.Points(g, customMaterial);
    // p.rotation.order = "ZYX";
    // p.rotation.z = 0.2;
    // scene.add(p);

    // const clock = new THREE.Clock();

    // // Iniciar el bucle de renderizado
    // renderer.setAnimationLoop(() => {
    //     controls.update();
    //     let t = clock.getElapsedTime() * 0.5;
    //     gu.time.value = t * Math.PI;
    //     p.rotation.y = t * 0.05;
    //     renderer.render(scene, camera);
    // });
    // here end galaxy it is working


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

    console.info("HOLA");




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