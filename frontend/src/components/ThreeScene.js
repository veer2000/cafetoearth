import { useEffect, useRef } from 'react';
import * as THREE from 'three';

const ThreeScene = ({ onObjectClick }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const clickableObjectsRef = useRef([]);

  useEffect(() => {
    if (!mountRef.current) return;
    
    const currentMount = mountRef.current;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0x0f0f12);
    scene.fog = new THREE.Fog(0x0f0f12, 15, 50);
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 2, 8);
    camera.lookAt(0, 1, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ antialias: window.innerWidth > 768 });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    currentMount.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Lighting - Enhanced for better visibility
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const pointLight1 = new THREE.PointLight(0x2a9d8f, 2, 25);
    pointLight1.position.set(-5, 5, 5);
    scene.add(pointLight1);

    const pointLight2 = new THREE.PointLight(0xe9c46a, 1.5, 25);
    pointLight2.position.set(5, 4, -3);
    scene.add(pointLight2);

    const pointLight3 = new THREE.PointLight(0x2a9d8f, 1.2, 20);
    pointLight3.position.set(0, 6, 0);
    scene.add(pointLight3);

    const spotLight = new THREE.SpotLight(0xffffff, 1);
    spotLight.position.set(0, 10, 0);
    spotLight.angle = Math.PI / 4;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    // Floor with contour lines
    const floorGeometry = new THREE.PlaneGeometry(20, 20, 40, 40);
    const vertices = floorGeometry.attributes.position.array;
    for (let i = 0; i < vertices.length; i += 3) {
      const x = vertices[i];
      const z = vertices[i + 1];
      vertices[i + 2] = Math.sin(x * 0.5) * Math.cos(z * 0.5) * 0.3;
    }
    floorGeometry.computeVertexNormals();

    const floorMaterial = new THREE.MeshStandardMaterial({
      color: 0x252529,
      wireframe: false,
      roughness: 0.8,
      metalness: 0.2
    });
    const floor = new THREE.Mesh(floorGeometry, floorMaterial);
    floor.rotation.x = -Math.PI / 2;
    floor.position.y = 0;
    scene.add(floor);

    // Floor contour lines
    const contourGeometry = new THREE.EdgesGeometry(floorGeometry);
    const contourMaterial = new THREE.LineBasicMaterial({ 
      color: 0x2a9d8f, 
      transparent: true, 
      opacity: 0.6 
    });
    const contourLines = new THREE.LineSegments(contourGeometry, contourMaterial);
    contourLines.rotation.x = -Math.PI / 2;
    contourLines.position.y = 0.01;
    scene.add(contourLines);

    // Create cafe objects
    const clickableObjects = [];

    // Counter/Bar
    const counterGroup = new THREE.Group();
    const counterGeometry = new THREE.BoxGeometry(4, 1.2, 1);
    const counterMaterial = new THREE.MeshStandardMaterial({ 
      color: 0x264653, 
      roughness: 0.6,
      emissive: 0x2a9d8f,
      emissiveIntensity: 0.2
    });
    const counter = new THREE.Mesh(counterGeometry, counterMaterial);
    counter.position.set(0, 0.6, -3);
    
    const counterWireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(counterGeometry),
      new THREE.LineBasicMaterial({ color: 0x2a9d8f, linewidth: 2 })
    );
    counterWireframe.position.copy(counter.position);
    
    counterGroup.add(counter);
    counterGroup.add(counterWireframe);
    counterGroup.userData = { name: 'Counter', info: 'Main coffee bar - Order your favorite brew here!' };
    scene.add(counterGroup);
    clickableObjects.push(counter);

    // Coffee Machine
    const machineGroup = new THREE.Group();
    const machineGeometry = new THREE.BoxGeometry(0.6, 0.8, 0.5);
    const machineMaterial = new THREE.MeshStandardMaterial({ 
      color: 0xe9c46a,
      emissive: 0xe9c46a,
      emissiveIntensity: 0.3,
      metalness: 0.5,
      roughness: 0.3
    });
    const machine = new THREE.Mesh(machineGeometry, machineMaterial);
    machine.position.set(-1, 1.6, -3);
    
    const machineWireframe = new THREE.LineSegments(
      new THREE.EdgesGeometry(machineGeometry),
      new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 2 })
    );
    machineWireframe.position.copy(machine.position);
    
    machineGroup.add(machine);
    machineGroup.add(machineWireframe);
    machineGroup.userData = { name: 'Espresso Machine', info: 'Premium espresso machine - Crafting perfect shots since day one!' };
    scene.add(machineGroup);
    clickableObjects.push(machine);

    // Tables
    const tablePositions = [
      [-3, 0.5, 2],
      [3, 0.5, 2],
      [-3, 0.5, 5],
      [3, 0.5, 5]
    ];

    tablePositions.forEach((pos, index) => {
      const tableGroup = new THREE.Group();
      const tableTopGeometry = new THREE.CylinderGeometry(0.8, 0.8, 0.1, 8);
      const tableMaterial = new THREE.MeshStandardMaterial({ 
        color: 0xf4a261,
        emissive: 0xf4a261,
        emissiveIntensity: 0.15,
        roughness: 0.5
      });
      const tableTop = new THREE.Mesh(tableTopGeometry, tableMaterial);
      tableTop.position.set(pos[0], pos[1], pos[2]);

      const tableLegGeometry = new THREE.CylinderGeometry(0.05, 0.05, 1, 8);
      const tableLeg = new THREE.Mesh(tableLegGeometry, tableMaterial);
      tableLeg.position.set(pos[0], pos[1] - 0.5, pos[2]);

      const wireframeTop = new THREE.LineSegments(
        new THREE.EdgesGeometry(tableTopGeometry),
        new THREE.LineBasicMaterial({ color: 0x2a9d8f })
      );
      wireframeTop.position.copy(tableTop.position);

      tableGroup.add(tableTop);
      tableGroup.add(tableLeg);
      tableGroup.add(wireframeTop);
      tableGroup.userData = { name: `Table ${index + 1}`, info: 'Cozy seating area - Perfect spot to enjoy your coffee!' };
      scene.add(tableGroup);
      clickableObjects.push(tableTop);
    });

    // Floating decorative elements (contour-inspired) - Enhanced visibility
    for (let i = 0; i < 20; i++) {
      const size = Math.random() * 0.3 + 0.15;
      const ringGeometry = new THREE.TorusGeometry(size, size * 0.08, 8, 16);
      const ringMaterial = new THREE.MeshBasicMaterial({ 
        color: i % 2 === 0 ? 0x2a9d8f : 0xe9c46a,
        transparent: true,
        opacity: 0.5,
        wireframe: true
      });
      const ring = new THREE.Mesh(ringGeometry, ringMaterial);
      ring.position.set(
        (Math.random() - 0.5) * 15,
        Math.random() * 6 + 0.5,
        (Math.random() - 0.5) * 15
      );
      ring.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      );
      scene.add(ring);
    }

    clickableObjectsRef.current = clickableObjects;

    // Animation variables
    let time = 0;
    let autoRotate = true;
    let targetCameraX = 0;

    // Mouse move for camera follow
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
      targetCameraX = mouseRef.current.x * 2;
      autoRotate = false;
      setTimeout(() => { autoRotate = true; }, 3000);
    };

    // Click handler
    const handleClick = (event) => {
      const mouse = new THREE.Vector2();
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;

      raycasterRef.current.setFromCamera(mouse, camera);
      const intersects = raycasterRef.current.intersectObjects(clickableObjects);

      if (intersects.length > 0) {
        const clickedObject = intersects[0].object;
        const parent = clickedObject.parent;
        if (parent && parent.userData) {
          onObjectClick?.(parent.userData);
        }
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      time += 0.01;

      // Smooth camera movement
      if (autoRotate) {
        camera.position.x = Math.sin(time * 0.2) * 8;
        camera.position.z = Math.cos(time * 0.2) * 8 + 2;
      } else {
        camera.position.x += (targetCameraX * 3 - camera.position.x) * 0.05;
      }
      camera.lookAt(0, 1, 0);

      // Animate lights
      pointLight1.intensity = 1 + Math.sin(time * 2) * 0.2;
      pointLight2.intensity = 0.8 + Math.cos(time * 1.5) * 0.2;

      // Animate floating rings
      scene.children.forEach(child => {
        if (child.geometry && child.geometry.type === 'TorusGeometry') {
          child.rotation.x += 0.01;
          child.rotation.y += 0.005;
          child.position.y += Math.sin(time + child.position.x) * 0.002;
        }
      });

      renderer.render(scene, camera);
    };
    animate();

    // Handle window resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      
      if (currentMount && renderer.domElement) {
        currentMount.removeChild(renderer.domElement);
      }
      
      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach(material => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });
      
      renderer.dispose();
    };
  }, [onObjectClick]);

  return <div ref={mountRef} className="fixed inset-0 -z-10" />;
};

export default ThreeScene;
