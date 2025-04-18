import React from 'react'
import About from './blocks/aboutblock/about';
import  Technology from './blocks/technologies/technologies';
const RootPage = () => {
  return (
    <div className='bg-gray-950'>
      <About />
      <Technology />
      
    </div>
  );
};
export default RootPage;