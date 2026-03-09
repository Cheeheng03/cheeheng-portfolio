"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { AsciiRenderer } from "@react-three/drei";
import * as THREE from "three";

function RotatingShape() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  // Create a subtle floating and rotating effect
  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      
      // Auto-rotation
      meshRef.current.rotation.x = time * 0.2;
      meshRef.current.rotation.y = time * 0.3;

      // Mouse interaction - follow cursor
      const targetX = (state.pointer.x * Math.PI) / 2;
      const targetY = (state.pointer.y * Math.PI) / 2;
      
      // Smooth interpolation towards target
      meshRef.current.rotation.y += (targetX - meshRef.current.rotation.y) * 0.1;
      meshRef.current.rotation.x += (-targetY - meshRef.current.rotation.x) * 0.1;
    }
  });

  return (
    <mesh ref={meshRef}>
      <sphereGeometry args={[2.4, 32, 32]} />
      {/* We use a standard material so it reacts to lighting, which AsciiRenderer translates to characters */}
      <meshStandardMaterial color="#ef4444" roughness={0.5} metalness={0.5} />
    </mesh>
  );
}

export function InteractiveAscii() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="w-full h-full min-h-[400px]" />;
  }

  return (
    <div className="w-full h-full min-h-[400px] flex items-center justify-center relative cursor-crosshair">
      <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
        <color attach="background" args={["transparent"]} />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />
        <pointLight position={[-10, -10, -10]} intensity={1} />
        <RotatingShape />
        <AsciiRenderer 
          fgColor="#ef4444" 
          bgColor="transparent" 
          characters=" .:-+*=%@#" 
          resolution={0.2}
          invert={false}
        />
      </Canvas>
    </div>
  );
}
