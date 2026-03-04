import { Points, PointMaterial } from "@react-three/drei";
import { useMemo } from "react";
import * as THREE from "three";

const FloatingParticles = () => {
  const particles = useMemo(() => {
    const arr = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000 * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 20;
    }
    return arr;
  }, []);

  return (
    <Points positions={particles}>
      <PointMaterial size={0.02} color="#00ffff" />
    </Points>
  );
};

export default FloatingParticles;