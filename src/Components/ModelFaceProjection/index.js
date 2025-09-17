import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const ModelFaceProjection = ({ imageUrl }) => {
  const mountRef = useRef();

  useEffect(() => {
    const scene = new THREE.Scene();
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    const width = mountRef.current.clientWidth;
    const height = mountRef.current.clientHeight;
    renderer.setSize(width, height);
    mountRef.current.appendChild(renderer.domElement);

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.set(0, 1.6, 2);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.target.set(0, 1.5, 0);
    controls.update();

    const light = new THREE.DirectionalLight(0xffffff, 1);
    light.position.set(0, 2, 3);
    scene.add(light);

    const loader = new GLTFLoader();
    loader.load("model/unwrap.glb", (gltf) => {
      const model = gltf.scene;
      model.scale.set(1, 1, 1);
      model.position.set(0, 0, 0);
      scene.add(model);

      const faceMesh = model.getObjectByName("base_female_Material180300_0"); // Replace with exact Blender mesh name

      if (faceMesh && faceMesh.material) {
        const textureLoader = new THREE.TextureLoader();
        textureLoader.crossOrigin = "";
        textureLoader.load(
          imageUrl,
          (texture) => {
            texture.encoding = THREE.sRGBEncoding;
            texture.flipY = false;
            faceMesh.material.map = texture;
            faceMesh.material.needsUpdate = true;
          },
          undefined,
          (err) => console.error("Texture load error", err)
        );
      } else {
        console.warn("Head mesh not found or material missing");
      }
    });

    const animate = () => {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      mountRef.current.removeChild(renderer.domElement);
    };
  }, [imageUrl]);

  return <div ref={mountRef} style={{ width: "100%", height: "600px" }} />;
};

export default ModelFaceProjection;
