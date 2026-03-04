import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import Lighting from "./Lighting";
import FloatingParticles from "./FloatingParticles";
import LaptopModel from "./LaptopModel";
import SkillSphere from "./SkillSphere";
import CameraController from "./CameraController";
import { Environment } from "@react-three/drei";

const Scene = () => {
  return (
    <Canvas camera={{ position: [0, 2, 6], fov: 50 }}>
      <Suspense fallback={null}>
        <Lighting />
        <Environment preset="city" />
        <FloatingParticles />
        <LaptopModel />
        <SkillSphere />
        <CameraController />
      </Suspense>
    </Canvas>
  );
};

export default Scene;