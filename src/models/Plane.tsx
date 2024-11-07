import { useAnimations, useGLTF } from "@react-three/drei";
import React, {useRef, useEffect} from "react";
import planeScene from "../assets/3d/plane.glb";
import * as THREE from 'three';


interface PlaneProps extends React.ComponentProps<'mesh'> {
  isRotating?: boolean;
  planeScale : any
  planePosition: any
}

export function Plane({ isRotating, planePosition, planeScale, rotation }: PlaneProps) {

  const { scene, animations } = useGLTF(planeScene)
  const ref = useRef<THREE.Mesh>(null);
  const {actions}  = useAnimations(animations, ref)

  useEffect (()=> {
if(isRotating){
  actions['Take 001']?.play()
}else{
  actions['Take 001']?.stop()
}

  }, [actions, isRotating]
)


  return (
    <mesh ref={ref} position={planePosition} scale={planeScale} rotation={rotation}>
      <primitive object={scene} />
    </mesh>
  );
}

useGLTF.preload(planeScene);