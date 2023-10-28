import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import Stats from 'three/examples/jsm/libs/stats.module';

export default class SceneInit {
    public scene: THREE.Scene;
    public camera: THREE.PerspectiveCamera;
    public renderer: THREE.WebGLRenderer;
    public clock: THREE.Clock;
    public stats: any;
    public controls: OrbitControls;
  
    constructor(public canvasId: string) {
      this.scene = new THREE.Scene();
      this.camera = new THREE.PerspectiveCamera(
        45,
        window.innerWidth / window.innerHeight,
        1,
        1000
      );
      this.camera.position.z = 48;
  
      const canvas = document.getElementById(this.canvasId) as HTMLCanvasElement;
      this.renderer = new THREE.WebGLRenderer({
        canvas,
        antialias: true,
      });
      this.renderer.setSize(window.innerWidth, window.innerHeight);
  
      this.clock = new THREE.Clock();
      this.controls = new OrbitControls(this.camera, this.renderer.domElement);
  
      this.stats = Stats();
      document.body.appendChild(this.stats.dom);
  
      // Ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
      this.scene.add(ambientLight);
  
      // Directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 2);
      directionalLight.position.set(0, 32, 64);
      this.scene.add(directionalLight);
  
      window.addEventListener('resize', () => this.onWindowResize(), false);
    }
  
    public initialize() {
      // Initialize your scene here if needed.
    }
  
    public animate() {
      requestAnimationFrame(() => this.animate());
      this.render();
      this.stats.update();
      this.controls.update();
    }
  
    private render() {
      // Update your uniform data or other rendering logic here.
      this.renderer.render(this.scene, this.camera);
    }
  
    private onWindowResize() {
      this.camera.aspect = window.innerWidth / window.innerHeight;
      this.camera.updateProjectionMatrix();
      this.renderer.setSize(window.innerWidth, window.innerHeight);
    }
  }
  