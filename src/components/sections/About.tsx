import { motion } from "framer-motion";

const About = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <div className="row align-items-center">

          {/* Left Content */}
          <div className="col-md-6 mb-5 mb-md-0">
            <motion.h2
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="display-5 fw-bold text-light"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-secondary mt-4"
            >
              I am Aavishkar, a passionate Full Stack Developer focused on
              building modern web applications using React, TypeScript and
              Three.js. I love creating interactive, immersive user experiences
              that blend creativity with performance.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-secondary"
            >
              Currently pursuing B.Tech CSE, I specialize in building
              production-level projects that stand out — from ERP systems
              to advanced 3D portfolios like this one.
            </motion.p>
          </div>

          {/* Right Card */}
          <div className="col-md-6">
            <motion.div
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="about-card p-4"
            >
              <h5 className="text-info mb-3">Quick Info</h5>
              <ul className="list-unstyled text-light">
                <li>🎓 B.Tech Computer Science</li>
                <li>⚛️ React + TypeScript Specialist</li>
                <li>🌌 Three.js Enthusiast</li>
                <li>🚀 Building immersive web experiences</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;