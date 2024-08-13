import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect } from 'react';
import { Nav } from 'react-bootstrap';
import '../css/portfolio.css'
import FooterComp from '../componentes/footer';
import Navbar from './navbar';

import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
// para 
// import SceneInit from './lib/SceneInit' 
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import SceneInit from '../../lib/SceneInit';



export const Bodyportafolio: React.FC = () => {
    console.clear();

    //#region start three js
    useEffect(() => {
        const container = document.getElementById('three-container') as HTMLDivElement;
        const width = container.clientWidth;
        const height = container.clientHeight;

        const scene = new THREE.Scene();

        // Configuración del fondo transparente
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(width, height);
        renderer.setClearColor(0x000000, 0); // Color y opacidad del fondo

        container.appendChild(renderer.domElement);

        const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
        camera.position.set(0, 4, 21);

        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.enablePan = false;

        const gu = {
            time: { value: 0 }
        };

        let sizes: number[] = [];
        let shift: number[] = [];

        const pushShift = () => {
            shift.push(
                Math.random() * Math.PI,
                Math.random() * Math.PI * 2,
                (Math.random() * 0.9 + 0.1) * Math.PI * 0.1,
                Math.random() * 0.9 + 0.1
            );
        };

        let pts = new Array(50000).fill(undefined).map(p => {
            sizes.push(Math.random() * 1.5 + 0.5);
            pushShift();
            return new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 9.5);
        });

        for (let i = 0; i < 100000; i++) {
            let r = 10, R = 40;
            let rand = Math.pow(Math.random(), 1.5);
            let radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
            pts.push(new THREE.Vector3().setFromCylindricalCoords(radius, Math.random() * 2 * Math.PI, (Math.random() - 0.5) * 2));
            sizes.push(Math.random() * 1.5 + 0.5);
            pushShift();
        }

        const g = new THREE.BufferGeometry().setFromPoints(pts);
        g.setAttribute("sizes", new THREE.Float32BufferAttribute(sizes, 1));
        g.setAttribute("shift", new THREE.Float32BufferAttribute(shift, 4));

        class CustomPointsMaterial extends THREE.PointsMaterial {
            constructor() {
                super({
                    size: 0.125,
                    transparent: true,
                    depthTest: false,
                    blending: THREE.AdditiveBlending,
                });
            }

            onBeforeCompile(shader: THREE.Shader) {
                shader.uniforms.time = gu.time;
                shader.vertexShader = `
                    uniform float time;
                    attribute float sizes;
                    attribute vec4 shift;
                    varying vec3 vColor;
                    ${shader.vertexShader}
                `.replace(
                    'gl_PointSize = size;',
                    'gl_PointSize = size * sizes;'
                ).replace(
                    '#include <color_vertex>',
                    `#include <color_vertex>
                    float d = length(abs(position) / vec3(40., 10., 40));
                    d = clamp(d, 0., 1.);
                    vColor = mix(vec3(227., 155., 0.), vec3(100., 50., 255.), d) / 255.;
                    `
                ).replace(
                    '#include <begin_vertex>',
                    `#include <begin_vertex>
                    float t = time;
                    float moveT = mod(shift.x + shift.z * t, 6.28319);
                    float moveS = mod(shift.y + shift.z * t, 6.28319);
                    transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.a;
                    `
                );

                shader.fragmentShader = `
                    varying vec3 vColor;
                    ${shader.fragmentShader}
                `.replace(
                    '#include <clipping_planes_fragment>',
                    `#include <clipping_planes_fragment>
                    float d = length(gl_PointCoord.xy - 0.5);
                    `
                ).replace(
                    'vec4 diffuseColor = vec4( diffuse, opacity );',
                    'vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );'
                );
            }
        }

        const customMaterial = new CustomPointsMaterial();
        const p = new THREE.Points(g, customMaterial);
        p.rotation.order = "ZYX";
        p.rotation.z = 0.2;
        scene.add(p);

        const clock = new THREE.Clock();

        const resizeRenderer = () => {
            const width = container.clientWidth;
            const height = container.clientHeight;
            renderer.setSize(width, height);
            camera.aspect = width / height;
            camera.updateProjectionMatrix();
        };

        window.addEventListener('resize', resizeRenderer);

        const animate = () => {
            controls.update();
            let t = clock.getElapsedTime() * 0.5;
            gu.time.value = t * Math.PI;
            p.rotation.y = t * 0.05;
            renderer.render(scene, camera);
            requestAnimationFrame(animate);
        };

        animate();

        return () => {
            container.removeChild(renderer.domElement);
            window.removeEventListener('resize', resizeRenderer);
        };
    }, []);

    //#endregion end three js

    const [data, setData] = React.useState("Not Found");
    //here we are follogin the cursor 
    const cursor = document.querySelector(".cursor") as HTMLElement;



    console.info("HOLA");




    return (
        <div className='maincontainer' >
            <div className="container-fluid">
                <Navbar />
                <div className="row" style={{ color: "white", background: "" }}>
                    <div className="col-md-6" style={{ color: "white", background: "" }}>

                        <section className='home1'>
                            <div className="home-content">
                                <h1>Hello!, I'm Bryan Ruiz</h1>
                                <h2>Software Engenieer</h2>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque elit dui, lacinia vitae tellus et, convallis vehicula dolor. Integer vitae vulputate libero. Mauris ac sodales lectus, ac posuere est.Integer eget scelerisque lorem, vitae efficitur magna. Praesent viverra bibendum pretium. Nunc neque orci, egestas et ipsum id, ultricies porta nisi. Donec ac maximus ex, eu ornare turpis. Etiam imperdiet maximus lorem non aliquet.
                                </p>
                                <div className="btn-box">
                                    <a href='https://wa.link/8kqsb2'>Whatsapp!</a>
                                    <a href='#'>My cv</a>
                                </div>
                            </div>
                        </section>

                    </div>
                    <div className="col-md-6" style={{ color: "white", background: "" }}>
                        <div id="three-container" style={{ width: "100%", height: "100%" }}></div>
                    </div>


                </div>

                {/* <button type="button" className="btn btn-primary">Primary</button> */}

                <FooterComp />
            </div>
        </div>
    );
};



export default Bodyportafolio;