import { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import gsap from "gsap";

const useMouseParallax = (intensity: number = 0.5) => {
  const { camera } = useThree();

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const { innerWidth, innerHeight } = window;

      // Normalize mouse position (-1 to 1)
      const x = (event.clientX / innerWidth) * 2 - 1;
      const y = -(event.clientY / innerHeight) * 2 + 1;

      // Animate camera position smoothly
      gsap.to(camera.position, {
        x: x * intensity,
        y: y * intensity + 2, // Keep slight height
        duration: 1,
        ease: "power3.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [camera, intensity]);
};

export default useMouseParallax;