import { motion } from "framer-motion";
import { skills } from "../../data/skills";

const Skills = () => {
  return (
    <section
      id="skills"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-5 fw-bold text-center text-light mb-5"
        >
          My Skills
        </motion.h2>

        <div className="row">
          {skills.map((skill, index) => (
            <div className="col-md-6 mb-4" key={skill.name}>
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -80 : 80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="skill-card p-4"
              >
                <div className="d-flex justify-content-between">
                  <h6 className="text-info">{skill.name}</h6>
                  <span className="text-light">{skill.level}%</span>
                </div>

                <div className="progress bg-dark mt-2" style={{ height: "8px" }}>
                  <div
                    className="progress-bar bg-info"
                    role="progressbar"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>

                <small className="text-secondary">{skill.category}</small>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;