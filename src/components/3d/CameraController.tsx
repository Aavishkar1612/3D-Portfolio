import useScrollCamera from "../../hooks/useScrollCamera";
import useMouseParallax from "../../hooks/useMouseParallax";

const CameraController = () => {
  useScrollCamera();
  useMouseParallax(0.8); // adjust intensity here

  return null;
};

export default CameraController;