import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

const SkillSphere = () => {
  const ref = useRef<Mesh>(null!);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.02;
    }
  });

  return (
    <mesh ref={ref} position={[3, 1, 0]}>
      <sphereGeometry args={[1, 32, 32]} />
      <meshStandardMaterial wireframe color="#00ffff" />
    </mesh>
  );
};

export default SkillSphere;