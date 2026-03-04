import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Scene from "../components/3d/Scene";

const Layout = () => {
  const location = useLocation();

  return (
    <>
      {/* 3D Background Scene (fixed, does not re-render on route change) */}
      <Scene />

      {/* Content Layer */}
      <div className="content-overlay">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </div>
    </>
  );
};

export default Layout;