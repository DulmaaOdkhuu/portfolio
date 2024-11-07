import { useGLTF } from "@react-three/drei";
import React, { useRef } from "react";
import skyScene from "../assets/3d/sky.glb";
import {useFrame} from "@react-three/fiber";
import * as THREE from 'three';

interface SkyProps extends React.ComponentProps<"group"> {
  isRotating: boolean;
}

export function Sky({ isRotating }: SkyProps) {
  const sky = useGLTF(skyScene);
  const skyRef = useRef<THREE.Mesh>(null);

  useFrame((_, delta) => {
    if (isRotating && skyRef.current) {
        skyRef.current.rotation.y += 0.15 * delta;
    }
});


  return (
    <mesh ref ={skyRef}>
      <primitive object={sky.scene} />
    </mesh>
  );
}

useGLTF.preload(skyScene);
