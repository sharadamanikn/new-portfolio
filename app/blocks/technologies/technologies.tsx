"use client";

import {
  BadgeCheck,
  Database,
  Flame,
  GitBranch,
  Github,
  Layers,
  Rocket,
  Send,
  Server,
  Terminal,
  Triangle,
  Zap,
} from "lucide-react";

const technologies = [
    { name: "Vercel", icon: <Triangle size={36} /> },
    { name: "PostgreSQL", icon: <Database size={36} /> },
    { name: "Postman", icon: <Send size={36} /> },
    { name: "Prisma", icon: <Layers size={36} /> },
    { name: "React", icon: <BadgeCheck size={36} /> },
    { name: "TypeScript", icon: <Terminal size={36} /> },
    { name: "Supabase", icon: <Zap size={36} /> },
    { name: "Docker", icon: <Server size={36} /> },
    { name: "Git", icon: <GitBranch size={36} /> },
  { name: "GitHub", icon: <Github size={36} /> },
];

export default function Technology() {
  return (
    <section className=" text-white py-12 px-4">
     <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-center mb-10">
        <span className="text-green-400">Tech</span>
        <span className="text-sky-400">Stack</span>
      </h1> 

      <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
        {technologies.map((tech) => (
          <div
            key={tech.name}
            className="flex flex-col items-center  justify-center w-[130px] h-[130px] bg-neutral-700 rounded-lg  hover:bg-blue-400 transition"
          >
            <div className="mb-2">{tech.icon}</div>
            <span className="text-sm font-mono text-center">{tech.name}</span>
          </div>
        ))}    
      </div>
    </section>
  );
}
