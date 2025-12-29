import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useTheme } from '../../context/ThemeContext';
import { Sphere, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

interface ParticleProps {
  position: [number, number, number];
  color: string;
}

const Particle: React.FC<ParticleProps> = ({ position, color }) => {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.x += 0.01;
      mesh.current.rotation.y += 0.01;
    }
  });

  return (
    <Sphere ref={mesh} args={[0.05, 16, 16]} position={position}>
      <meshStandardMaterial color={color} emissive={color} emissiveIntensity={0.5} />
    </Sphere>
  );
};

const ParticleField: React.FC<{ color: string, count: number }> = ({ color, count }) => {
  const particlePositions = Array.from({ length: count }, () => {
    return [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ] as [number, number, number];
  });

  return (
    <>
      {particlePositions.map((position, i) => (
        <Particle key={i} position={position} color={color} />
      ))}
    </>
  );
};

const ThreeBackground: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={1} />
      <pointLight position={[-10, -10, -5]} intensity={0.5} />
      
      <ParticleField 
        color={theme === 'dark' ? '#4F46E5' : '#4F46E5'} 
        count={50} 
      />
      
      <OrbitControls
        enableZoom={false}
        enablePan={false}
        autoRotate
        autoRotateSpeed={0.5}
      />
    </>
  );
};

const ThreeScene: React.FC = () => {
  const { theme } = useTheme();
  
  return (
    <Canvas
      gl={{ antialias: true }}
      camera={{ position: [0, 0, 5], fov: 50 }}
      style={{ width: '100%', height: '100%' }}
    >
      <ThreeBackground />
    </Canvas>
  );
};

export default ThreeScene;