/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.18 witch-transformed.glb 
Author: Antro (https://sketchfab.com/Antro3d)
License: CC-BY-NC-4.0 (http://creativecommons.org/licenses/by-nc/4.0/)
Source: https://sketchfab.com/3d-models/elaina-wandering-witch-vrchatquest-avatar-91a65d069fb44892982b46be0a2a2553
Title: Elaina - Wandering Witch | VRChat/Quest Avatar
*/
"use client" 

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber';

export default function Witch(props) {
  const { nodes, materials } = useGLTF('/models/witch-transformed.glb')

  const modelRef = useRef();
  useFrame((state, delta, xrFrame) => {
    modelRef.current.position.y = -1.5 + Math.sin(state.clock.elapsedTime)*0.15
  })

  return (
    <group {...props} dispose={null} ref={modelRef} position={[0,-1.5,0]} > 
      <group scale={0.01}>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={184.922} >
          <primitive object={nodes._rootJoint} />
          <skinnedMesh geometry={nodes.Object_162.geometry} material={materials.Body} skeleton={nodes.Object_162.skeleton} />
          <skinnedMesh geometry={nodes.Object_163.geometry} material={materials.Coat} skeleton={nodes.Object_163.skeleton} />
          <skinnedMesh geometry={nodes.Object_164.geometry} material={materials.Outline_Skin} skeleton={nodes.Object_164.skeleton} />
          <skinnedMesh geometry={nodes.Object_166.geometry} material={materials.Dress} skeleton={nodes.Object_166.skeleton} />
          <skinnedMesh geometry={nodes.Object_167.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_167.skeleton} />
          <skinnedMesh geometry={nodes.Object_169.geometry} material={materials.Dress} skeleton={nodes.Object_169.skeleton} />
          <skinnedMesh geometry={nodes.Object_170.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_170.skeleton} />
          <skinnedMesh geometry={nodes.Object_172.geometry} material={materials.Coat} skeleton={nodes.Object_172.skeleton} />
          <skinnedMesh geometry={nodes.Object_173.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_173.skeleton} />
          <skinnedMesh geometry={nodes.Object_175.geometry} material={materials.Coat} skeleton={nodes.Object_175.skeleton} />
          <skinnedMesh geometry={nodes.Object_176.geometry} material={materials.Brooch} skeleton={nodes.Object_176.skeleton} />
          <skinnedMesh geometry={nodes.Object_177.geometry} material={materials.Outline_Coth} skeleton={nodes.Object_177.skeleton} />
          <skinnedMesh geometry={nodes.Object_179.geometry} material={materials.Coat} skeleton={nodes.Object_179.skeleton} />
          <skinnedMesh geometry={nodes.Object_180.geometry} material={materials.Hair} skeleton={nodes.Object_180.skeleton} />
          <skinnedMesh geometry={nodes.Object_181.geometry} material={materials.Dress} skeleton={nodes.Object_181.skeleton} />
          <skinnedMesh geometry={nodes.Object_182.geometry} material={materials.Outline_Hair} skeleton={nodes.Object_182.skeleton} />
          <skinnedMesh geometry={nodes.Object_184.geometry} material={materials.Hair} skeleton={nodes.Object_184.skeleton} />
          <skinnedMesh geometry={nodes.Object_185.geometry} material={materials.Face} skeleton={nodes.Object_185.skeleton} />
          <skinnedMesh geometry={nodes.Object_186.geometry} material={materials.Body} skeleton={nodes.Object_186.skeleton} />
          <skinnedMesh geometry={nodes.Object_187.geometry} material={materials.Outline_Skin} skeleton={nodes.Object_187.skeleton} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.Wand_broom_0.geometry} material={materials.broom} />
          <mesh geometry={nodes.Wand_Outline_cloth_0.geometry} material={materials.Outline_cloth} />
        </group>
        <group rotation={[-Math.PI / 2, 0, 0]} scale={100}>
          <mesh geometry={nodes.ribbon_Dress_0.geometry} material={materials.Dress} />
          <mesh geometry={nodes.ribbon_Outline_Coth_0.geometry} material={materials.Outline_Coth} />
        </group>
      </group>
    </group>
  )
}

useGLTF.preload('/models/witch-transformed.glb')