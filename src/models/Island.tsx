'use client';
import React, { useRef, useEffect, useState } from 'react';
import { useGLTF } from '@react-three/drei';
import islandScene from '../assets/3d/island.glb';
import { a } from '@react-spring/three';
import * as THREE from 'three';
import { useThree, useFrame } from '@react-three/fiber';

interface IslandProps extends React.ComponentProps<'group'> {
  isRotating: boolean;
  setIsRotating: (isRotating: boolean) => void;
  scale: any;
  rotation: any;
  position: any;
  setCurrentStage: any
}

export function Island({
  isRotating,
  setIsRotating,
  setCurrentStage,
  ...props
}: IslandProps) {
  const group = useRef<THREE.Group>(null);
  const islandRef = useRef<THREE.Group>(null);

  const { gl, viewport } = useThree();
  const { nodes, materials } = useGLTF(islandScene) as unknown as {
    nodes: {
      polySurface944_tree_body_0: THREE.Mesh;
      polySurface945_tree1_0: THREE.Mesh;
      polySurface946_tree2_0: THREE.Mesh;
      polySurface947_tree1_0: THREE.Mesh;
      polySurface948_tree_body_0: THREE.Mesh;
      polySurface949_tree_body_0: THREE.Mesh;
      pCube11_rocks1_0: THREE.Mesh;
    };
    materials: {
      PaletteMaterial001: THREE.Material;
    };
  };

  const lastX = useRef(0);
  const rotationSpeed = useRef<number>(0.01);
  const dampingFactor = 0.95;

  const handlePointerDown = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(true);
    const clientX = e.clientX;
    lastX.current = clientX; // Initialize lastX when pointer down
  };

  const handlePointerUp = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    setIsRotating(false);

    const clientX = e.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    if (islandRef.current) {
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    }
    lastX.current = clientX;
    rotationSpeed.current = delta + 0.01 * Math.PI;
  };

  const handlePointerMove = (e: PointerEvent) => {
    e.stopPropagation();
    e.preventDefault();
    if (isRotating) {
   const clientX = e.clientX;
    const delta = (clientX - lastX.current) / viewport.width;
    if (islandRef.current) {
      islandRef.current.rotation.y += delta * 0.01 * Math.PI;
    }
    lastX.current = clientX;
    rotationSpeed.current = delta + 0.01 * Math.PI;// Corrected to call handlePointerMove
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      if (!isRotating) setIsRotating(true);
      if (islandRef.current) {
        islandRef.current.rotation.y += 0.01 * Math.PI;
        rotationSpeed.current = 0.0125

      }
    } else if (e.key === 'ArrowRight') {
      if (!isRotating) setIsRotating(true);
      if (islandRef.current) {
        islandRef.current.rotation.y -= 0.01 * Math.PI;
        rotationSpeed.current = -0.0125
      }
    }
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') {
      setIsRotating(false);
    }
  };
  useFrame(() => {
    if (!isRotating) {
      rotationSpeed.current *= dampingFactor;
      if (Math.abs(rotationSpeed.current) < 0.001) {
        rotationSpeed.current = 0;
      }
      if (islandRef.current) {
        islandRef.current.rotation.y += rotationSpeed.current;
      }
    } else {
      if (islandRef.current) {
        const rotation = islandRef.current.rotation.y;
        
        // Normalize the rotation value to stay within [0, 2 * Math.PI]
        const normalizedRotation =
          ((rotation % (2 * Math.PI)) + 2 * Math.PI) % (2 * Math.PI);

        // Set the current stage based on the island's orientation
        switch (true) {
          case normalizedRotation >= 5.45 && normalizedRotation <= 5.85:
            setCurrentStage(4);
            break;
          case normalizedRotation >= 0.85 && normalizedRotation <= 1.3:
            setCurrentStage(3);
            break;
          case normalizedRotation >= 2.4 && normalizedRotation <= 2.6:
            setCurrentStage(2);
            break;
          case normalizedRotation >= 4.25 && normalizedRotation <= 4.75:
            setCurrentStage(1);
            break;
          default:
            setCurrentStage(null);
        }
      }
    }
  });

  useEffect(() => {
    const canvas = gl.domElement;
    canvas.addEventListener('pointerdown', handlePointerDown);
    canvas.addEventListener('pointerup', handlePointerUp);
    canvas.addEventListener('pointermove', handlePointerMove);
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);

    return () => {
      canvas.removeEventListener('pointerdown', handlePointerDown);
      canvas.removeEventListener('pointerup', handlePointerUp);
      canvas.removeEventListener('pointermove', handlePointerMove);
      document.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('keyup', handleKeyUp);
    };
  }, [gl, viewport, isRotating, setIsRotating, setCurrentStage]);

  return (
    <a.group ref={islandRef} {...props}>
      <mesh geometry={nodes.polySurface944_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface945_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface946_tree2_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface947_tree1_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface948_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.polySurface949_tree_body_0.geometry} material={materials.PaletteMaterial001} />
      <mesh geometry={nodes.pCube11_rocks1_0.geometry} material={materials.PaletteMaterial001} />
    </a.group>
  );
}

useGLTF.preload(islandScene);
