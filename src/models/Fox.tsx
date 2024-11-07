import React, { useRef, useEffect } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';
import foxScene from "../assets/3d/fox.glb";

type GLTFResult = GLTF & {
  nodes: {
    GLTF_created_0_rootJoint: THREE.Object3D;
    Object_7: THREE.SkinnedMesh;
    Object_8: THREE.SkinnedMesh;
    Object_9: THREE.SkinnedMesh;
    Object_10: THREE.SkinnedMesh;
    Object_11: THREE.SkinnedMesh;
  };
  materials: {
    PaletteMaterial001: THREE.Material;
  };
};

type ModelProps = {
  currentAnimation: string;
} & JSX.IntrinsicElements['group'];

export function Fox({ currentAnimation, ...props }: ModelProps) {
  const group = useRef<THREE.Group>(null);
  const { nodes, materials, animations } = useGLTF(foxScene) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  useEffect(() => {
    Object.values(actions).forEach((action) => {
        if (action) {
            action.stop();
        }
    });
    if (actions && currentAnimation) {
      actions[currentAnimation]?.play();
    }
  }, [actions, currentAnimation]);

  return (
    <group ref={group} {...props} dispose={null}>
      <group name="Sketchfab_Scene">
        <primitive object={nodes.GLTF_created_0_rootJoint} />
        <skinnedMesh
          name="Object_7"
          geometry={nodes.Object_7.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_7.skeleton}
        />
        <skinnedMesh
          name="Object_8"
          geometry={nodes.Object_8.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_8.skeleton}
        />
        <skinnedMesh
          name="Object_9"
          geometry={nodes.Object_9.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_9.skeleton}
        />
        <skinnedMesh
          name="Object_10"
          geometry={nodes.Object_10.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_10.skeleton}
        />
        <skinnedMesh
          name="Object_11"
          geometry={nodes.Object_11.geometry}
          material={materials.PaletteMaterial001}
          skeleton={nodes.Object_11.skeleton}
        />
      </group>
    </group>
  );
}


