"use client";
import React from "react";
import { ChevronRight } from "lucide-react";

const projects = [
	{
		title: "My Portfolio",
		description:
			"A personal portfolio website showcasing my projects, skills, and experiences built with React.js and Vite.",
		link: "https://github.com/sharadamanikn/portfolio.git",
	},
	{
		title: "Iris Pattern Recognition System",
		description:
			"A MATLAB-based project that uses image processing techniques to identify iris patterns for biometric authentication.",
	},
	{
		title: "Hacker News Server Backend",
		description:
			"A scalable TypeScript backend for a social news platform which includes user authentication, posts, comments, and likes.",
		link: "https://github.com/sharadamanikn/hackernews-server.git",
	},
];

const Projects = () => {
	return (
		<div className="bg-gray-950  flex flex-col items-center pt-16 px-4
        pb-15">
			<div className="w-full md:w-3/4 lg:w-1/2">
				<h1 className="text-white text-3xl md:text-2xl font-bold mb-8 text-left">
					Projects
				</h1>
			</div>

			<div className="flex flex-col gap-4 w-full md:w-3/4 lg:w-1/2">
				{projects.map((project, index) => (
					<a
						key={index}
						href={project.link}
						target="_blank"
						rel="noopener noreferrer"
						className="border border-neutral-700 bg-neutral-1000 p-5 rounded-lg flex justify-between items-center hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition cursor-pointer"
					>
						<div>
							<h2 className="text-white text-lg md:text-xl font-semibold mb-2">
								{project.title}
							</h2>
							<p className="text-gray-400 font-mono text-sm md:text-base">
								{project.description}
							</p>
						</div>
						<div className="flex items-center gap-1 text-gray-400">
							<span className="text-sm md:text-base">View</span>
							<ChevronRight className="text-gray-400" />
						</div>
					</a>
				))}
			</div>
		</div>
	);
};

export default Projects;
