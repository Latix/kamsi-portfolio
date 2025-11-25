import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef();
  
  // Generate random positions for stars
  const positions = useMemo(() => {
    const positions = new Float32Array(5000 * 3);
    
    for (let i = 0; i < 5000; i++) {
      // Random positions in a sphere
      const radius = 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    
    return positions;
  }, []);

  // Animate rotation
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta * 0.05;
      ref.current.rotation.y -= delta * 0.075;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#6ee7b7"
          size={0.015}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function FloatingGeometry() {
  const meshRef = useRef();
  const wireframeRef = useRef();
  
  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(t * 0.2) * 0.3;
      meshRef.current.rotation.y = Math.cos(t * 0.1) * 0.3;
      meshRef.current.position.y = Math.sin(t * 0.3) * 0.5;
    }
    if (wireframeRef.current) {
      wireframeRef.current.rotation.x = Math.sin(t * 0.15) * 0.2;
      wireframeRef.current.rotation.y = Math.cos(t * 0.2) * 0.2;
    }
  });

  return (
    <>
      {/* Main geometry */}
      <mesh ref={meshRef} position={[3, 0, -2]}>
        <torusKnotGeometry args={[0.6, 0.2, 100, 16]} />
        <meshStandardMaterial 
          color="#10b981" 
          wireframe={false}
          transparent
          opacity={0.1}
        />
      </mesh>
      
      {/* Wireframe overlay */}
      <mesh ref={wireframeRef} position={[-3, -1, -3]}>
        <icosahedronGeometry args={[0.8, 1]} />
        <meshStandardMaterial 
          color="#34d399" 
          wireframe={true}
          transparent
          opacity={0.3}
        />
      </mesh>
    </>
  );
}

function ThreeBackground() {
  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      zIndex: -1,
      background: 'linear-gradient(135deg, #0a0f0a 0%, #0d1f12 50%, #0a1810 100%)'
    }}>
      <Canvas
        camera={{ position: [0, 0, 5], fov: 60 }}
        gl={{ 
          antialias: true, 
          alpha: true,
          powerPreference: "high-performance"
        }}
        dpr={[1, 2]} // Limit pixel ratio for performance
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} color="#10b981" />
        <pointLight position={[-10, -10, -10]} intensity={0.5} color="#34d399" />
        <StarField />
        <FloatingGeometry />
      </Canvas>
    </div>
  );
}

export default ThreeBackground;

