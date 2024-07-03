"use client";

import { BtnList } from "../../../app/data";
import React from "react";
import NavButton from "./NavButton";
import useScreenSize from "../hooks/useScreenSize";
import ResponsiveComponent from "../ResponsiveComponent";
import {motion } from 'framer-motion'

const container ={
  hidden:{opacity:0},
  show:{
    opacity:1,
    transition:{
      staggerChildren: 0.3,
    }
  }
}

function Navigation() {
  const angleIncrement = 360 / BtnList.length;
  const size = useScreenSize();

  console.log("size=", size);
  const isLarge = size >= 1024; 
  console.log('l=',isLarge)
  const isMedium = size >= 768;
  console.log('M=',isMedium)
  return (
    <div className="flex items-center justify-center h-screen fixed w-full ">
      <ResponsiveComponent>
        {({ size }) => {
          return size && size >= 480 ? ( 
            <motion.div 
            variants={container}
            initial="hidden"
            animate ="show" 

            className="w-max flex items-center justify-center relative text-white  hover:pause animate-spin-slow group">
              {BtnList.map((btn, index) => {
                const angleRad = (index*angleIncrement * Math.PI)/180; 
                const radius = isLarge
                  ? "calc(18vw - 1rem)"
                  : isMedium
                  ? "calc(30vw - 1rem)"
                  : "calc(40vw - 1rem)";
                  console.log( 'r=',radius)
                const x = `calc(${radius}*${Math.cos(angleRad)})`;

                const y = `calc(${radius}*${Math.sin(angleRad)})`;

                return <NavButton key={btn.label} x={x} y={y} {...btn} />;
              })}
            </motion.div>
          ) : (
            <div className="flex justify-between w-screen ">
             <motion.div
             variants={container}
             initial="hidden"
             animate ="show" 
              className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4  items-start relative text-white   group  ">
              {BtnList.slice(0,BtnList.length/2).map((btn, index) => {
                  

                return <NavButton key={btn.label} x={0} y={0} {...btn} />;
              })}
            </motion.div>

             <motion.div 

              variants={container}
               initial="hidden"
              animate ="show" 
             
             className="w-full px-2.5 xs:p-0 xs:w-max flex flex-col space-y-4   items-end relative text-white   group ">
              {BtnList.slice(BtnList.length/2, BtnList.length).map((btn, index) => {
              

                return <NavButton key={btn.label} x={0} y={0} {...btn} labelDirection="left"/>;
              })}
            </motion.div>


            </div>
           
          );
        }}
      </ResponsiveComponent>
    </div>
  );
}

export default Navigation;
