"use client";
import Loader from "@/components/Loader";
import { Canvas } from "@react-three/fiber";
import React, { useState, useEffect, useRef } from "react";
import { Island } from "@/models/Island";
import { Suspense } from "react";
import { Sky } from "@/models/Sky";
import { Bird } from "@/models/Bird";
import { Plane } from "@/models/Plane";
import HomeInfo from "@/components/HomeInfo";
import celtic from "@/assets/celtic.mp3";
import { soundoff, soundon } from "@/assets/icons";
import Image from "next/image";

export default function Home() {
  const audioRef = useRef(new Audio(celtic));
  audioRef.current.volume = 0.3;
  audioRef.current.loop = true;
  const [isRotating, setIsRotating] = useState(false);
  const [currentStage, setCurrentStage] = useState(1);
  const [isPlayingMusic, setIsPlayingMusic] = useState(false);

  useEffect(() => {
    if (isPlayingMusic) {
      audioRef.current.play();
    }
    return () => {
      audioRef.current.pause();
    };
  }, [isPlayingMusic]);

  const adjustIslandForScreenSize = () => {
    let screenScale = null;
    let screenPosition = [0, -6.5, -43];
    let rotation = [0.1, 4.7, 0];

    if (window.innerWidth < 768) {
      screenScale = [0.9, 0.9, 0.9];
    } else {
      screenScale = [1, 1, 1];
    }
    return [screenScale, screenPosition, rotation];
  };
  const adjustPlaneForScreenSize = () => {
    let screenScale, screenPosition;

    if (window.innerWidth < 768) {
      screenScale = [1.5, 1.5, 1.5];
      screenPosition = [0, -1.5, 0];
    } else {
      screenScale = [3, 3, 3];
      screenPosition = [0, -4, -4];
    }
    return [screenScale, screenPosition];
  };
  const [islandScale, islandPosition, islandRotation] =
    adjustIslandForScreenSize();
  const [planeScale, planePosition] = adjustPlaneForScreenSize();
  return (
    <section className="w-full h-screen relative">
      <div className="absolute top-28 left-0 right-0 z-10 flex items-center justify-center">
        {currentStage && <HomeInfo currentStage={currentStage} />}
      </div>
      <Canvas
        className={`w-full h-screen bg-transparent ${
          isRotating ? "cursor-grabbing" : "cursor-grab"
        }`}
        camera={{ near: 0.1, far: 1000 }}
      >
        <Suspense fallback={<Loader />}>
          <directionalLight position={[1, 10, 10]} intensity={2} />
          <ambientLight intensity={0.5} />
          <hemisphereLight groundColor={"#000000"} intensity={1} />
          <Bird />
          <Island
            position={islandPosition}
            scale={islandScale}
            rotation={islandRotation}
            setIsRotating={setIsRotating}
            isRotating={isRotating}
            setCurrentStage={setCurrentStage}
          />
          <Sky isRotating={isRotating} />
          <Plane
            planeScale={planeScale}
            planePosition={planePosition}
            isRotating={isRotating}
            rotation={[0, 20, 0]}
          />
        </Suspense>
      </Canvas>
      <div className="absolute bottom-2 left-2">
        <Image
          src={!isPlayingMusic ? soundon : soundoff}
          alt="Project Icon"
          className="w-10 h-10 cursor-pointer object-contain"
          onClick={()=> setIsPlayingMusic(!isPlayingMusic)}
        />
      </div>
    </section>
  );
}
