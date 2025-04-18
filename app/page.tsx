import React from 'react'
import About from './blocks/aboutblock/about';
import  Technology from './blocks/technologies/technologies';
import Projects from './blocks/projectsblock/projects';
const RootPage = () => {
  return (
    <div className='bg-gray-950'>
      <About />
      <Technology />
      <Projects />
    </div>
  );
};
export default RootPage;