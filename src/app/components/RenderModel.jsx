"use client"


import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import clsx from 'clsx'
import React, { Suspense } from 'react'



function RenderModel({children, className}) {
  return (
    <Canvas className={clsx("w-screen h-screen relative -z-10", className)}>  
        <Suspense fallback={null}>
            {children}
        </Suspense>

        <Environment preset='sunset'/>
    </Canvas>
  )
}

export default RenderModel