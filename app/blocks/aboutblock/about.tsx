import React from 'react';

export const About = () => {
  return (
    <div className="w-[90%] md:w-1/2 mx-auto mt-16 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-center">
        <span className="text-green-400">Hi, I'm </span>
        <span className="text-sky-400">Sharadamani K N</span>
        <span className="ml-2">👋</span>
      </h1>

      <p className="text-1xl mt-2 text-neutral-300  text-center">
        Final Year Student, Computer Science and Engineering
      </p>

      <p className="mt-6 text-neutral-200 leading-relaxed text-2xl text-justify">
        I am currently pursuing my B.E. in Computer Science and Engineering. I am a passionate learner and a tech enthusiast. I love to explore new technologies and work on projects that challenge me. 
        I am aspiring to pursue M.Tech in Computer Science to deepen my knowledge in the field. I love reading self improvement books and writing blogs about my learnings.

      </p>

    </div>
  );
}

export default About;
