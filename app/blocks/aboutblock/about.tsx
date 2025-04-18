import { Github, Instagram,  Linkedin } from 'lucide-react';
import React from 'react';
import Link from 'next/link';

export const About = () => {
  return (
    <div className="bg-gray-950 max-w-3xl mx-auto px-4 mt-13 text-white">
      <h1 className="text-2xl md:text-3xl font-extrabold leading-snug text-center">
        <span className="text-green-400">Hi, I&apos;m </span>
        <span className="text-sky-400">Sharadamani K N</span>
        <span className="ml-2"> 🚀</span>
      </h1>

      <p className="text-sm mt-2 text-neutral-300  text-center mb-3">
        Final Year Student   |   Information Science and Engineering
      </p>
      <div className="flex gap-6 text-sm text-gray-100 justify-center mb-8">
          <Link
            href="https://github.com/sharadamanikn"
            target="_blank"
            className="hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition"
          >
            <Github size={25} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/sharadamani-k-n-44663124b/"
            target="_blank"
            className="hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition"
          >
            <Linkedin size={25} />
          </Link>
          <Link
            href="https://www.instagram.com/sharda_mani_?igsh=MXRvbTVmZzR4dGdxMQ=="
            target="_blank"
            className="hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] transition"
          >
            <Instagram size={25} />
          </Link>
        </div>
      <h1 className="text-3xl md:text-2xl leading-snug  mb-4">
        <span className="text-white-400 ">About Me </span>
      </h1> 
            <p className="mt-4 text-neutral-200 leading-relaxed text-1xl text-justify mb-7">
        I am currently pursuing my B.E. in Information Science and Engineering. I am a passionate learner and a tech enthusiast. I love to explore new technologies and learn them. 
        I am aspiring to pursue M.Tech in Computer Science to deepen my knowledge in the field. I love reading self improvement books and writing blogs about my learnings.

      </p>

    </div>
  );
}

export default About;
