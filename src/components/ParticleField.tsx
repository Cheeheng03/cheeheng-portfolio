"use client";

import { useRef, useMemo, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function Particles({ count = 5000 }) {
  const pointsRef = useRef<THREE.Points>(null);
  
  // Track mouse coordinates manually so we can use pointer-events-none on canvas
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Generate particles
  const [positions, originalPositions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const orig = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    
    const color1 = new THREE.Color("#ef4444"); // Primary red
    const color2 = new THREE.Color("#3b82f6"); // Blue
    const color3 = new THREE.Color("#ffffff"); // White
    
    for (let i = 0; i < count; i++) {
      // Create a nice galaxy/flow field shape
      const r = 12 * Math.cbrt(Math.random()); // Radius
      const theta = Math.random() * 2 * Math.PI; // Angle
      const phi = Math.acos(2 * Math.random() - 1); // Height angle
      
      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);
      
      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;

      orig[i * 3] = x;
      orig[i * 3 + 1] = y;
      orig[i * 3 + 2] = z;

      // Color distribution based on distance from center or random
      const rand = Math.random();
      let c = color3;
      if (rand > 0.8) c = color1;
      else if (rand > 0.5) c = color2;
      
      // Add slight variation
      c.multiplyScalar(0.8 + Math.random() * 0.4);

      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }
    return [pos, orig, col];
  }, [count]);

  const mouse = useMemo(() => new THREE.Vector3(), []);
  const inverseMatrix = useMemo(() => new THREE.Matrix4(), []);

  useFrame((state) => {
    if (!pointsRef.current) return;

    const time = state.clock.elapsedTime;
    
    // Auto rotation for the whole field
    pointsRef.current.rotation.y = time * 0.05;
    pointsRef.current.rotation.x = time * 0.02;
    
    // Update individual particle positions for mouse repulsion
    pointsRef.current.updateMatrixWorld();
    
    // Project mouse to local space
    mouse.set(
      (mousePos.x * state.viewport.width) / 2,
      (mousePos.y * state.viewport.height) / 2,
      0
    );
    inverseMatrix.copy(pointsRef.current.matrixWorld).invert();
    mouse.applyMatrix4(inverseMatrix);

    const positionsArr = pointsRef.current.geometry.attributes.position.array as Float32Array;

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;
      
      const ox = originalPositions[i3];
      const oy = originalPositions[i3 + 1];
      const oz = originalPositions[i3 + 2];

      let px = positionsArr[i3];
      let py = positionsArr[i3 + 1];
      let pz = positionsArr[i3 + 2];

      // Float effect
      const floatY = Math.sin(time + ox * 0.5) * 0.2;
      
      // Distance to mouse
      const dx = mouse.x - px;
      const dy = mouse.y - py;
      const dz = mouse.z - pz;
      const dist = Math.sqrt(dx * dx + dy * dy + dz * dz);
      
      const maxDist = 3.5;
      if (dist < maxDist) {
        // Repel
        const force = (maxDist - dist) / maxDist;
        px -= (dx / dist) * force * 0.15;
        py -= (dy / dist) * force * 0.15;
        pz -= (dz / dist) * force * 0.15;
      } else {
        // Return to original + float
        px += (ox - px) * 0.05;
        py += (oy + floatY - py) * 0.05;
        pz += (oz - pz) * 0.05;
      }

      positionsArr[i3] = px;
      positionsArr[i3 + 1] = py;
      positionsArr[i3 + 2] = pz;
    }
    
    pointsRef.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

export function ParticleField() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-40 lg:opacity-60">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }} gl={{ alpha: true }}>
        <Particles count={5000} />
      </Canvas>
    </div>
  );
}
