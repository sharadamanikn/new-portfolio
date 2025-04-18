import React from 'react';

export const About = () => {
  return (
    <div className="bg-gray-950 w-[90%] md:w-1/2 mx-auto mt-16 text-white">
      <h1 className="text-4xl md:text-5xl font-extrabold leading-snug text-center">
        <span className="text-green-400">Hi, I'm </span>
        <span className="text-sky-400">Sharadamani K N</span>
        <span className="ml-2"> 🚀</span>
      </h1>

      <p className="text-1xl mt-2 text-neutral-300  text-center mb-10">
        Final Year Student   |   Information Science and Engineering
      </p>
      <h1 className="text-4xl md:text-3xl leading-snug  mb-4">
        <span className="text-white-400 ">About Me </span>
      </h1> 
            <p className="mt-4 text-neutral-200 leading-relaxed text-2xl text-justify mb-7">
        I am currently pursuing my B.E. in Information Science and Engineering. I am a passionate learner and a tech enthusiast. I love to explore new technologies and learn them. 
        I am aspiring to pursue M.Tech in Computer Science to deepen my knowledge in the field. I love reading self improvement books and writing blogs about my learnings.

      </p>

    </div>
  );
}

export default About;
