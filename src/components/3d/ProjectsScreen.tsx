import { projects } from "../../data/projects";

const ProjectsScreen = () => {
  return (
    <div
      style={{
        background: "#000",
        padding: "20px",
        borderRadius: "10px",
        color: "white",
        fontSize: "12px",
      }}
    >
      <h6 style={{ color: "#00ffff" }}>My Projects</h6>

      {projects.map((project) => (
        <div key={project.id} style={{ marginBottom: "10px" }}>
          <strong>{project.title}</strong>
          <p style={{ fontSize: "10px", color: "#aaa" }}>
            {project.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProjectsScreen;