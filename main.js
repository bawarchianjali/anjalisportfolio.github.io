import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { HalftonePass } from 'three/addons/postprocessing/HalftonePass.js';
import { ShaderPass } from 'three/addons/postprocessing/ShaderPass.js';
import { RGBShiftShader } from 'three/addons/shaders/RGBShiftShader.js';

// 1. Setup
const canvas = document.getElementById("experience-canvas");
const sizes = { width: window.innerWidth, height: window.innerHeight };
const scene = new THREE.Scene();
const contactCard = document.querySelector('.contact-card');

// 2. Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
const startY = 25; 
const endY = 6;    
let currentY = startY;
camera.position.set(0, startY, 0); 

// 3. Renderer
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 4. Lights
scene.add(new THREE.AmbientLight(0xffffff, 10));
const light = new THREE.DirectionalLight(0xffffff, 40);
light.position.set(0, 50, 0);
scene.add(light);

// 5. Post-Processing
const composer = new EffectComposer(renderer);
composer.addPass(new RenderPass(scene, camera));

const halftonePass = new HalftonePass(sizes.width, sizes.height, { radius: 10, shape: 1 });
composer.addPass(halftonePass);

const rgbShiftPass = new ShaderPass(RGBShiftShader);
rgbShiftPass.uniforms['amount'].value = 0.05; 
composer.addPass(rgbShiftPass);

// 6. Load Flowers
let flowers = [];
const loader = new GLTFLoader();

loader.load("./bloom.glb", (glb) => {
    const baseModel = glb.scene;
    const box = new THREE.Box3().setFromObject(baseModel);
    const size = box.getSize(new THREE.Vector3());
    const initialScale = 1 / Math.max(size.x, size.y, size.z);

    const spacing = window.innerWidth < 768 ? 1.5 : 2.7;
    const positions = [-spacing, 0, spacing];

    positions.forEach((xPos) => {
        const flower = baseModel.clone();
        flower.position.set(xPos, -4, 0);
        flower.scale.set(0.001, 0.001, 0.001); // Start invisible
        scene.add(flower);
        flowers.push({ mesh: flower, baseScale: initialScale });
    });
});

// 7. Corrected Scroll Logic
let scrollPercent = 0;

window.addEventListener('scroll', () => {
    // Recalculate scrollable height every time for mobile URL bar changes
    const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
    scrollPercent = Math.max(0, Math.min(1, window.scrollY / (scrollableHeight || 1)));

    const scrollWrapper = document.getElementById('scroll-wrapper');
    if (scrollWrapper) {
        scrollWrapper.style.opacity = window.scrollY > 50 ? '0' : '1';
    }
});

// 8. Animation Loop
function animate() {
    // 1. Camera Logic
    const targetY = startY + (endY - startY) * scrollPercent;
    currentY += (targetY - currentY) * 0.05; 
    camera.position.y = currentY;
    camera.lookAt(0, -2, 0); 

    // 2. Flower Logic
    flowers.forEach((flowerObj) => {
        const { mesh, baseScale } = flowerObj;
        
        // TRIGGERS BLOOM AFTER 80% SCROLL (After About Section)
        const triggerPoint = 0.8; 
        let growFactor = 0.001; 

        if (scrollPercent > triggerPoint) {
            const bloomProgress = (scrollPercent - triggerPoint) / (1 - triggerPoint);
            growFactor = 1 + (bloomProgress * 6); 
        }
        
        const finalScale = baseScale * growFactor;
        mesh.scale.set(finalScale, finalScale, finalScale);
        mesh.rotation.y += 0.01;
    });

    const triggerPoint = 0.85; // Appears slightly after blooming starts
    if (scrollPercent > triggerPoint) {
        contactCard.classList.add('visible');
    } else {
        contactCard.classList.remove('visible');
    }

    composer.render();
}
renderer.setAnimationLoop(animate);

// 9. Resize
window.addEventListener("resize", () => {
    sizes.width = window.innerWidth;
    sizes.height = window.innerHeight;
    
    camera.aspect = sizes.width / sizes.height;
    camera.updateProjectionMatrix();
    
    renderer.setSize(sizes.width, sizes.height);
    composer.setSize(sizes.width, sizes.height);
});