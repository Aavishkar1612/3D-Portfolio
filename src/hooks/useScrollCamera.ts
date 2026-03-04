import { useEffect } from "react";
import gsap from "gsap";
import { useThree } from "@react-three/fiber";

const useScrollCamera = () => {
  const { camera } = useThree();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      const scroll = window.scrollY;
      gsap.to(camera.position, {
        z: 6 - scroll * 0.005,
        duration: 1,
      });
    });
  }, []);
};

export default useScrollCamera;