export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  github: string;
  demo?: string;
}

export const projects: Project[] = [
 
  {
    id: 2,
    title: "SmartCampus ERP Frontend",
    description:
      "Frontend application for a Smart Campus ERP system with dashboards, authentication and management UI.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    github:
      "https://github.com/Aavishkar1612/SmartCampus-ERP-frontend",
    demo: "", // add demo link if deployed
  },
  {
    id: 3,
    title: "Bank Website",
    description:
      "Responsive bank website UI project built with modern JavaScript and CSS.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Aavishkar1612/bank-website",
  },
  {
    id: 4,
    title: "Personal Portfolio",
    description:
      "My personal portfolio repository showing skills, projects and contact.",
    tech: ["React", "CSS"],
    github: "https://github.com/Aavishkar1612/Portfolio",
    demo: "",
  },
];