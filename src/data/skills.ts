export interface Skill {
  name: string;
  level: number; // percentage
  category: string;
}

export const skills: Skill[] = [
  { name: "React", level: 80, category: "Frontend" },
  { name: "TypeScript", level: 70, category: "Frontend" },
  { name: "JavaScript", level: 80, category: "Frontend" },
  { name: "Node.js", level: 70, category: "Backend" },
  { name: "MongoDB", level: 65, category: "Backend" },
  { name: "MySQL", level: 65, category: "Database" },
];