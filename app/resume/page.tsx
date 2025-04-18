import React from 'react';

const ResumePage = () => {
  return (
    <div className="bg-gray-950 min-h-screen text-white px-4 py-10">
      <div className="max-w-3xl mx-auto">

        <h1 className="text-2xl font-bold mb-4">My Resume</h1>
        <p className="text-gray-400 mb-8">Some (updated) info about me</p>
        <hr className="border-white-700 mb-10 w-full max-w-3xl" />


        <div className="border border-gray-700 rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Basics</h2>
          <p><span className="font-bold">Name:</span> Sharadamani K N</p>
          <p><span className="font-bold">Label:</span> Final Year Information Science</p>
          <p><span className="font-bold">Location:</span>Tumakuru, India</p>
          <p><span className="font-bold">Email:</span> sharadamanikn@gmail.com</p>
        </div>

        {/* Education Section */}
        <div className="border border-gray-700 rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Education</h2>
          <div className="mb-6">
            <p className="text-sky-400 font-semibold">2021 - Present</p>
            <p className="font-bold">Bachelor of Engineering</p>
            <p>Siddaganga Institute of Technology, Tumakuru, India</p>
            <p>Information Science and Engineering</p>
            <p>CGPA: 9.06</p>
          </div>
          <div>
            <p className="font-bold">Pre-University</p>
            <p>Seshadripuram P U College, Tumakuru, India</p>
            <p>PCMB</p>
          </div>
        </div>

        {/* Work Section */}
        <div className="border border-gray-700 rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Work</h2>

          <div className="mb-6">
            <p className="text-sky-400 font-semibold">March-2025 - Present</p>
            <p className="font-bold">Fullstack AI Developer</p>
            <p>StackLane</p>
            <p>Exploring the field of fullstack. </p>
          </div>
          </div>

          <div className="border border-gray-700 rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Technical Skills</h2>
          <ul className="list-disc list-inside text-gray-100">
            <li>Languages: C++, C, Python, HTML, CSS, JavaScript,Typescript</li>
            <li>Databases: PostgreSQL, Oracle</li>
            <li>Tools: VS Code, Git, GitHub, Microsoft Excel, Postman</li>
            <li>CS Fundamentals: DSA, DBMS, OS, CN, CO</li>
            </ul>
        </div>

        <div className="border border-gray-700 rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Projects</h2>
          <ul className="list-disc list-inside text-gray-100">
            <li>Hacker News Backend - A scalable TypeScript based backend for a social news platform which includes user authentication, posts, comments, and likes. Deployed it by implementing the CI/CD pipelines in Azure. </li>
            <li>Personal Portfolio Website - A personal portfolio website showcasing my projects, skills, and experiences built with Next.js and VittailwindCSS.</li>
            <li>Iris Pattern Recognition system - A MATLAB-based project that uses image processing techniques to identify iris patterns for biometric authentication.</li>
          </ul>
        </div>


        {/* Certificates Section */}
        <div className="border border-gray-700 rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Certificates</h2>
          <ul className="list-disc list-inside text-gray-100">
            <li> Data Structures and Algorithms | GeeksForGeeks</li>
            <li> Basics of Networking (CCNA) | Cisco </li>
            <li>Basics of Pyhton | CodeWise </li>
          </ul>
        </div>

        <div className="border border-gray-700 rounded-lg p-6 mb-4">
          <h2 className="text-2xl font-semibold mb-4">Hobbies</h2>
          <ul className="list-disc list-inside text-gray-100">
            <li>Reading Books</li>
            <li>Painting</li>
            
          </ul>
        </div>

      </div>
    </div>
  );
};

export default ResumePage;
