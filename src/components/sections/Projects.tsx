import { motion } from "framer-motion";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        padding: "80px 0",
      }}
    >
      <div className="container">
        {/* Section Title */}
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="display-4 fw-bold text-center text-light mb-5"
        >
          Featured Projects
        </motion.h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="project-card p-4 h-100 d-flex flex-column"
                style={{
                  background: "rgba(255, 255, 255, 0.05)",
                  backdropFilter: "blur(10px)",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.1)",
                  transition: "all 0.3s ease",
                }}
              >
                <h5 className="text-info mb-3 fw-bold">
                  {project.title}
                </h5>

                <p className="text-light mb-3" style={{ fontSize: "0.9rem" }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="mb-4">
                  {project.tech.map((techItem, i) => (
                    <span
                      key={i}
                      className="badge bg-dark me-2 mb-2"
                      style={{
                        border: "1px solid rgba(255,255,255,0.1)",
                        fontSize: "0.75rem",
                      }}
                    >
                      {techItem}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="mt-auto d-flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline-info btn-sm"
                  >
                    GitHub
                  </a>

                  {project.demo && project.demo !== "" && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-info btn-sm"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;