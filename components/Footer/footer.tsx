import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-1000 border-t border-neutral-600 py-6 flex justify-center">
      <div className="w-[90%] md:w-3/4 lg:w-1/2 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-100 text-1xl mb-2 md:mb-0">
          © {new Date().getFullYear()} Sharadamani K N
        </div>
        <div className="flex-grow text-center text-1xl text-gray-100 ">
          Made with ❤️ (Next.js) 
        </div>

        <div className="flex gap-3">
         <a
    href="https://tally.so/r/mOye77"
    target="_blank"
    rel="noopener noreferrer"
    className="bg-blue-500 hover:shadow-[0_0_11px_rgba(59,130,246,0.6)] text-white font-semibold flex items-center justify-center py-2 px-4 h-[40px] w-[90px] rounded-2xl transition duration-200"
  >
    Connect
  </a>
          
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
