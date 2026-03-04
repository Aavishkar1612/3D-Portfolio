import { useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh, Group } from "three";
import { Html } from "@react-three/drei";
import gsap from "gsap";
import ProjectsScreen from "./ProjectsScreen";

const LaptopModel = () => {
  const groupRef = useRef<Group>(null!);
  const lidRef = useRef<Mesh>(null!);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);

    if (lidRef.current) {
      gsap.to(lidRef.current.rotation, {
        x: open ? 0 : -1.2, // hinge rotation
        duration: 1,
        ease: "power3.inOut",
      });
    }
  };

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.rotation.y += 0.003;
    }
  });

  return (
    <group ref={groupRef} position={[0, 0, 0]} onClick={handleClick}>
      
      {/* Laptop Base */}
      <mesh position={[0, 0, 0]}>
        <boxGeometry args={[2.5, 0.2, 1.5]} />
        <meshStandardMaterial color="#111" />
      </mesh>

      {/* Laptop Lid */}
      <mesh ref={lidRef} position={[0, 0.75, -0.75]}>
        <boxGeometry args={[2.5, 1.5, 0.1]} />
        <meshStandardMaterial color="#000" />

        {/* Screen Content */}
        {open && (
          <Html
            position={[0, 0, 0.06]}
            transform
            distanceFactor={1.5}
            style={{ width: "400px" }}
          >
            <ProjectsScreen />
          </Html>
        )}
      </mesh>

    </group>
  );
};

export default LaptopModel;