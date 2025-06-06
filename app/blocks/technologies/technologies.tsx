"use client";

import {
  BadgeCheck,
  Database,
  GitBranch,
  Github,
  Layers,
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
    <section className="bg-gray-950 text-white py-12 px-4 ">
      <div className="max-w-3xl mx-auto px-4 ">
        <h1 className="text-3xl md:text-2xl mb-8 text-left">
          <span className="text-white-400">Tech Stack </span>
        </h1>

        <div className="flex flex-wrap justify-center md:justify-start gap-7">
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="flex flex-col items-center justify-center w-[120px] h-[110px] border border-white-200 rounded-lg hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition"
            >
              <div className="mb-2">{tech.icon}</div>
              <span className="text-sm font-mono text-center">{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
