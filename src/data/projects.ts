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
    id: 1,
    title: "3D Portfolio Website",
    description:
      "Modern interactive 3D portfolio built using React, Three.js and Framer Motion with smooth animations and immersive UI experience.",
    tech: ["React", "TypeScript", "Three.js", "Framer Motion", "Vite"],
    github: "https://github.com/Aavishkar1612/3D-Portfolio",
    demo: "", // add Vercel link after deployment
  },

  {
    id: 2,
    title: "SmartCampus ERP Frontend",
    description:
      "Frontend application for a Smart Campus ERP system featuring authentication, dashboards, role-based UI and responsive design.",
    tech: ["React", "JavaScript", "CSS", "Vite"],
    github: "https://github.com/Aavishkar1612/SmartCampus-ERP-frontend",
    demo: "https://smart-campus-erp-frontend.vercel.app/",
  },

  {
    id: 3,
    title: "Bank Website UI",
    description:
      "Responsive banking website interface showcasing modern layout design and clean component structure using vanilla JavaScript.",
    tech: ["JavaScript", "HTML", "CSS"],
    github: "https://github.com/Aavishkar1612/bank-website",
    demo: "https://abfintech-mu.vercel.app/",
  },

  {
    id: 4,
    title: "RaktDhara – Blood Bank Management App",
    description:
      "Final Year Capstone group project: Android-based Blood Bank Management System enabling donor registration, real-time blood stock tracking, and request management. Built with Firebase Realtime Database for secure data handling and live updates.",
    tech: ["Android", "Java", "Firebase Realtime Database", "XML"],
    github: "https://github.com/nagu-mundhe/RaktDhara-Blood-Bank-App",
  },
];