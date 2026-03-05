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
              className="display-5 fw-bold text-light mb-4"
            >
              About Me
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="text-secondary mb-3"
              style={{ textAlign: "justify", lineHeight: "1.7rem" }}
            >
              I am <strong>Aavishkar Vijay Bhosale</strong>, a passionate Front End Developer specializing in <strong>React</strong> and <strong>TypeScript</strong>, with a strong foundation in <strong>Data Structures & Algorithms</strong>. I build modern, high-performance web applications and immersive 3D experiences that balance clean architecture, practical business logic, and user-centric design. I actively leverage AI tools to enhance development efficiency, optimize solutions, and ensure scalable, reliable, and accountable software.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-secondary mb-3"
              style={{ textAlign: "justify", lineHeight: "1.7rem" }}
            >
              Currently pursuing <strong>B.Tech in Computer Science and Information Technology</strong>, with a strong foundation in programming, object-oriented principles, and data structures. I build real-world applications including React-based ERP systems, fintech interfaces, and Android apps integrated with Firebase.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-secondary"
              style={{ textAlign: "justify", lineHeight: "1.7rem" }}
            >
              I actively leverage modern AI tools to enhance development speed, improve code quality, and optimize problem-solving efficiency. However, I treat AI as an assistant—not a replacement for engineering judgment. Every solution is carefully reviewed, tested, and refined to ensure accuracy, scalability, and accountability in production-level applications.
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
              <ul className="list-unstyled text-light mb-0" style={{ lineHeight: "1.8rem" }}>
                <li>🎓 B.Tech CSE (IT) Undergraduate</li>
                <li>⚛️ React & TypeScript Developer</li>
                <li>📱 Android Developer (Firebase Integrated)</li>
                <li>🤖 AI-Enhanced Development Workflow</li>
                <li>🚀 Focused on Scalable & Practical Software Solutions</li>
              </ul>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;