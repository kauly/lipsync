"use client";

import { Environment, OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { AvatarModel } from "./avatar-model";

export default function AppAvatar() {
  return (
    <Canvas shadows camera={{ position: [0, 0, 12], fov: 30 }}>
      <color attach="background" args={["#f0f0f0"]} />
      <OrbitControls />
      <Environment preset="sunset" />
      <AvatarModel position={[0, -3, 0]} scale={2} />
    </Canvas>
  );
}
