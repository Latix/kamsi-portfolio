import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial, MeshDistortMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Apple-style flowing mesh with distortion
function FlowingMesh({ mousePosition }) {
  const meshRef = useRef();
  const materialRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    if (meshRef.current) {
      // Smooth organic rotation
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.2 + mousePosition.y * 0.3;
      meshRef.current.rotation.y = Math.cos(t * 0.15) * 0.2 + mousePosition.x * 0.3;
      
      // Gentle floating motion
      meshRef.current.position.y = Math.sin(t * 0.2) * 0.3;
      meshRef.current.position.x = Math.cos(t * 0.15) * 0.2;
    }
    
    // Animate material distortion
    if (materialRef.current) {
      materialRef.current.distort = 0.3 + Math.sin(t * 0.5) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef} position={[0, 0, -3]} scale={2.5}>
      <sphereGeometry args={[1, 128, 128]} />
      <MeshDistortMaterial
        ref={materialRef}
        color="#10b981"
        transparent
        opacity={0.15}
        wireframe={false}
        distort={0.4}
        speed={1.5}
        roughness={0.4}
        metalness={0.8}
      />
    </mesh>
  );
}

// Enhanced particle field with depth
function ParticleField({ mousePosition, isMobile }) {
  const pointsRef = useRef();
  
  const [positions, colors] = useMemo(() => {
    const count = isMobile ? 1500 : 3000; // Reduce particles on mobile
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    
    const color1 = new THREE.Color('#10b981');
    const color2 = new THREE.Color('#34d399');
    const color3 = new THREE.Color('#059669');
    
    for (let i = 0; i < count; i++) {
      // Create layered particle field
      const layer = Math.floor(Math.random() * 3);
      const radius = 4 + layer * 2;
      
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi) - 3;
      
      // Vary colors by layer
      const color = layer === 0 ? color1 : layer === 1 ? color2 : color3;
      colors[i * 3] = color.r;
      colors[i * 3 + 1] = color.g;
      colors[i * 3 + 2] = color.b;
    }
    
    return [positions, colors];
  }, [isMobile]);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      // Slow organic rotation
      pointsRef.current.rotation.x += delta * 0.03;
      pointsRef.current.rotation.y += delta * 0.02;
      
      // Respond to mouse with smoothing (only on desktop)
      if (!isMobile) {
        pointsRef.current.rotation.x += mousePosition.y * delta * 0.1;
        pointsRef.current.rotation.y += mousePosition.x * delta * 0.1;
      }
    }
  });

  // Create geometry with colors
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geo.setAttribute('color', new THREE.BufferAttribute(colors, 3));
    return geo;
  }, [positions, colors]);

  return (
    <points ref={pointsRef} geometry={geometry} frustumCulled={false}>
      <pointsMaterial
        transparent
        vertexColors
        size={isMobile ? 0.015 : 0.012}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
        opacity={0.8}
      />
    </points>
  );
}

// Flowing waves/lines effect (like Apple's gradient meshes)
function FlowingLines() {
  const groupRef = useRef();
  const linesData = useMemo(() => {
    const lines = [];
    const lineCount = 8;
    
    for (let i = 0; i < lineCount; i++) {
      const points = [];
      const segments = 50;
      const radius = 3 + i * 0.3;
      
      for (let j = 0; j <= segments; j++) {
        const angle = (j / segments) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const z = -2 - i * 0.2;
        points.push(new THREE.Vector3(x, y, z));
      }
      
      lines.push(new THREE.CatmullRomCurve3(points, true));
    }
    
    return lines;
  }, []);

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (groupRef.current) {
      groupRef.current.rotation.z = t * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {linesData.map((curve, idx) => (
        <mesh key={idx}>
          <tubeGeometry args={[curve, 100, 0.003, 8, true]} />
          <meshBasicMaterial
            color={idx % 2 === 0 ? '#10b981' : '#059669'}
            transparent
            opacity={0.15 - idx * 0.015}
          />
        </mesh>
      ))}
    </group>
  );
}

// Floating orbs with glow
function GlowingOrbs() {
  const orbs = useMemo(() => [
    { position: [2, 1, -1], scale: 0.3, color: '#10b981' },
    { position: [-2.5, -0.5, -2], scale: 0.25, color: '#34d399' },
    { position: [1.5, -1.5, -1.5], scale: 0.2, color: '#059669' },
  ], []);

  return (
    <>
      {orbs.map((orb, idx) => (
        <Orb key={idx} {...orb} index={idx} />
      ))}
    </>
  );
}

function Orb({ position, scale, color, index }) {
  const meshRef = useRef();
  const lightRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    const offset = index * 2;
    
    if (meshRef.current) {
      meshRef.current.position.y = position[1] + Math.sin(t * 0.3 + offset) * 0.5;
      meshRef.current.position.x = position[0] + Math.cos(t * 0.2 + offset) * 0.3;
    }
    
    if (lightRef.current) {
      lightRef.current.intensity = 0.8 + Math.sin(t * 0.5 + offset) * 0.3;
    }
  });

  return (
    <group>
      <mesh ref={meshRef} position={position} scale={scale}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color={color}
          transparent
          opacity={0.2}
          emissive={color}
          emissiveIntensity={0.5}
        />
      </mesh>
      <pointLight
        ref={lightRef}
        position={position}
        color={color}
        intensity={0.8}
        distance={5}
        decay={2}
      />
    </group>
  );
}

// Mouse tracking for interactive effects
function MouseTracker({ onMouseMove }) {
  useEffect(() => {
    const handleMouseMove = (event) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      onMouseMove({ x: x * 0.5, y: y * 0.5 });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [onMouseMove]);
  
  return null;
}

function ThreeBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Detect mobile devices for performance optimization
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'radial-gradient(ellipse at 50% 50%, #0d1f12 0%, #0a0f0a 50%, #050805 100%)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ 
          antialias: !isMobile, // Disable antialiasing on mobile
          alpha: true,
          powerPreference: "high-performance",
          stencil: false,
          depth: true,
        }}
        dpr={isMobile ? [1, 1] : [1, 2]} // Lower DPR on mobile
        performance={{ min: 0.5 }} // Adaptive performance
      >
        {/* Subtle ambient lighting */}
        <ambientLight intensity={0.3} />
        
        {/* Key lights for depth */}
        <directionalLight position={[5, 5, 5]} intensity={0.4} color="#10b981" />
        <directionalLight position={[-5, -5, -5]} intensity={0.2} color="#059669" />
        
        {/* Mouse tracking for interactivity */}
        {!isMobile && <MouseTracker onMouseMove={setMousePosition} />}
        
        {/* Main visual elements */}
        {!isMobile && <FlowingMesh mousePosition={mousePosition} />}
        <ParticleField mousePosition={mousePosition} isMobile={isMobile} />
        {!isMobile && <FlowingLines />}
        <GlowingOrbs />
      </Canvas>
      
      {/* Gradient overlay for depth */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at 20% 30%, rgba(16, 185, 129, 0.05) 0%, transparent 50%), radial-gradient(circle at 80% 70%, rgba(5, 150, 105, 0.05) 0%, transparent 50%)',
        pointerEvents: 'none',
      }} />
    </div>
  );
}

export default ThreeBackground;

