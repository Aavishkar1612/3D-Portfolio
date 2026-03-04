import { motion } from "framer-motion";
import About from "./About";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";

const Hero = () => {
  return (
    <>
      {/* HERO SECTION */}
      <section
        style={{
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="container text-center">

          {/* Main Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="display-2 fw-bold"
          >
            Hi, I'm <span className="text-info">Aavishkar</span> 👋
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="lead text-secondary mt-4"
          >
            Full Stack Developer • React • TypeScript • Three.js
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-4"
          >
            <a href="#projects" className="btn btn-info me-3 px-4 py-2">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline-light px-4 py-2">
              Contact Me
            </a>
          </motion.div>

          {/* Scroll Down Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="mt-5"
          >
            <p className="text-secondary small">Scroll Down</p>
            <div className="scroll-indicator mx-auto mt-2"></div>
          </motion.div>

        </div>
      </section>

      {/* OTHER SECTIONS */}
      <About />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Hero;