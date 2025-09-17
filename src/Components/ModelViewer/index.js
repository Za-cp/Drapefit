import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import './ModelViewer.css';
import LoadingSpinner3D from '../LoadingSpinner3D';

export default function ModelViewer({ modelPath = "/model/small.glb", shirtTexture, modelSizeLabel }) {
  const mountRef = useRef();
  const modelRef = useRef();
  const sceneRef = useRef();
  const rendererRef = useRef();
  const cameraRef = useRef();
  const controlsRef = useRef();
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf9f9f9);
    sceneRef.current = scene;

    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 2.8, 1.5);
    cameraRef.current = camera;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(400, 400);
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.8;
    mountRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    const ambientLight = new THREE.AmbientLight(0xffffff, 1.1);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.0);
    directionalLight.position.set(0, 3, 3);
    scene.add(directionalLight);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.rotateSpeed = 0.6;
    controls.zoomSpeed = 0.8;
    controls.enablePan = false;
    controls.target.set(0, 0.9, 0);
    controls.update();
    controlsRef.current = controls;

    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };
    animate();

    const loader = new GLTFLoader();
    setLoading(true);
    setFadeOut(false);

    loader.load(
      modelPath,
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;
        scene.add(model);

        if (shirtTexture) {
          applyShirtTexture(model, shirtTexture, modelPath);
        }

        setTimeout(() => {
          setFadeOut(true);
          setTimeout(() => setLoading(false), 500);
        }, 800);
      },
      undefined,
      (error) => {
        console.error('❌ Error loading model:', error);
        setFadeOut(true);
        setTimeout(() => setLoading(false), 500);
      }
    );

    return () => {
      if (mountRef.current) {
        while (mountRef.current.firstChild) {
          mountRef.current.removeChild(mountRef.current.firstChild);
        }
      }
      renderer.dispose();
    };
  }, [modelPath]);

  useEffect(() => {
    if (!shirtTexture || !modelRef.current) return;
    applyShirtTexture(modelRef.current, shirtTexture, modelPath);
  }, [shirtTexture]);

  const applyShirtTexture = (model, texturePath) => {
  const loader = new THREE.TextureLoader();

  // Mesh names detected from your console logs
  const meshNamesByModel = {
  small: ['Cloth_mesh001', 'Cloth_mesh001_1', 'Cloth_mesh001_2','Cloth_mesh003','Cloth_mesh003_1','Cloth_mesh003_2'],
  medium: [
    'Pattern2D_149238_1',
    'Pattern2D_149238_2',
    'Pattern2D_149238_3'
  ],
  large: [
    'Cloth',
    'Cloth_mesh004', 'Cloth_mesh004_1', 'Cloth_mesh004_2',
    'Cloth_mesh016', 'Cloth_mesh016_1', 'Cloth_mesh016_2',
    'Cloth003', 'Cloth007','Cloth012','Cloth013','Cloth014','Cloth015','Cloth020','Cloth024','Cloth025','Cloth026'
  ]
};


  // Determine model size from modelPath
  let modelKey = 'small';
  const lowerPath = modelPath.toLowerCase();
  if (lowerPath.includes('medium')) modelKey = 'medium';
  else if (lowerPath.includes('large')) modelKey = 'large';

  const targetMeshNames = meshNamesByModel[modelKey];

  console.log('🧵 applyShirtTexture called with:', texturePath);
  console.log('🧵 Target Meshes for', modelKey, ':', targetMeshNames);

  loader.load(texturePath, (texture) => {
    texture.encoding = THREE.sRGBEncoding;
    texture.wrapS = THREE.RepeatWrapping;
    texture.wrapT = THREE.RepeatWrapping;
    texture.repeat.set(1, 1);
    texture.flipY = false;

    model.traverse((child) => {
      if (child.isMesh) {
        console.log("🔍 Found mesh:", child.name);
        if (targetMeshNames.includes(child.name)) {
          console.log("✅ Applying texture to:", child.name);
          const newMaterial = new THREE.MeshStandardMaterial({
          map: texture,
          metalness: 0.1,       // optional tweak
          roughness: 0.9        // optional tweak
        });

          child.material.map = texture;
          child.material.needsUpdate = true;
        }
      }
    });
  });
};


  // CSS animations as a string to inject
  const cssAnimations = `
    @keyframes bounce {
      0%, 80%, 100% { 
        transform: translateY(0) scale(1);
        opacity: 0.7;
      }
      40% { 
        transform: translateY(-8px) scale(1.1);
        opacity: 1;
      }
    }

    @keyframes fadeInScale {
      from {
        opacity: 0;
        transform: scale(0.8);
      }
      to {
        opacity: 1;
        transform: scale(1);
      }
    }

    @keyframes slideUpBounce {
      0% {
        opacity: 0;
        transform: translateX(-50%) translateY(30px) scale(0.9);
      }
      60% {
        opacity: 1;
        transform: translateX(-50%) translateY(-5px) scale(1.05);
      }
      100% {
        opacity: 1;
        transform: translateX(-50%) translateY(0) scale(1);
      }
    }

    @keyframes pulse {
      0%, 100% { opacity: 1; }
      50% { opacity: 0.5; }
    }

    .model-size-badge {
      animation: fadeInScale 0.6s ease-out;
    }

    .model-size-bottom {
      animation: slideUpBounce 0.8s ease-out;
    }

    .loading-dot {
      animation: bounce 1.4s infinite ease-in-out;
    }

    .pulse-dot {
      animation: pulse 2s infinite;
    }
  `;
console.log('ModelSizeLabel prop:', modelSizeLabel);
  console.log('Loading state:', loading);
  return (
    <>
      {/* Inject CSS animations */}
      <style dangerouslySetInnerHTML={{ __html: cssAnimations }} />
      
      <div style={{ 
        position: 'relative', 
        width: '400px', 
        height: '400px',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 10px 40px rgba(0, 0, 0, 0.15)',
        background: '#f9f9f9'
      }}>
        {/* Loading Overlay */}
        {loading && (
          <div 
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              right: '0',
              bottom: '0',
              zIndex: 1000,
              opacity: fadeOut ? 0 : 1,
              transition: 'opacity 0.5s ease-out',
              backgroundColor: 'rgba(249, 249, 249, 0.95)',
              backdropFilter: 'blur(4px)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <div style={{ 
              width: '200px', 
              height: '200px',
              marginBottom: '20px'
            }}>
              <LoadingSpinner3D 
                width="200px" 
                height="200px" 
                showText={false}
                backgroundColor="transparent"
              />
            </div>

            <div style={{ textAlign: 'center' }}>
              <p style={{
                color: '#2d3748',
                fontWeight: '600',
                fontSize: '16px',
                margin: '0 0 12px 0',
                letterSpacing: '0.5px'
              }}>
                Loading your perfect fit...
              </p>
              
              <div style={{
                display: 'flex',
                justifyContent: 'center',
                gap: '6px'
              }}>
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="loading-dot"
                    style={{
                      width: '8px',
                      height: '8px',
                      backgroundColor: '#667eea',
                      borderRadius: '50%',
                      animationDelay: `${i * 0.2}s`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Model Canvas */}
        <div 
          ref={mountRef} 
          style={{
            opacity: loading ? 0 : 1,
            transition: 'opacity 0.6s ease-in',
            width: '100%',
            height: '100%'
          }}
        />

        {/* Size Labels - Both Options */}
        {!loading && modelSizeLabel && (
          <>
            {/* Top Right Badge */}
            <div 
              className="model-size-badge"
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                borderRadius: '12px',
                padding: '8px 14px',
                fontSize: '11px',
                fontWeight: '700',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: '#4a5568',
                boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
                zIndex: 10
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div 
                  className="pulse-dot"
                  style={{
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#48bb78',
                    borderRadius: '50%'
                  }} 
                />
                Size {modelSizeLabel}
              </div>
            </div>

            
          </>
        )}
      </div>
    </>
  );
}