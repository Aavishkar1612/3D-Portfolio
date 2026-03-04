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
      }}
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="display-5 fw-bold text-center text-light mb-5"
        >
          My Projects
        </motion.h2>

        <div className="row">
          {projects.map((project, index) => (
            <div className="col-md-4 mb-4" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="project-card p-4 h-100"
              >
                <h5 className="text-info mb-3">{project.title}</h5>

                <p className="text-secondary">
                  {project.description}
                </p>

                <div className="mb-3">
                  {project.tech.map((techItem, i) => (
                    <span key={i} className="badge bg-dark me-2 mb-2">
                      {techItem}
                    </span>
                  ))}
                </div>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="btn btn-outline-info btn-sm"
                >
                  View Code
                </a>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;