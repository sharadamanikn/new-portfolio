import React from "react";

const Footer = () => {
  return (
  <div className="relative bg-gray-1000 border-t border-neutral-600 py-6">
  <div className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-100 text-1xl">
    © {new Date().getFullYear()} Sharadamani K N
  </div>

  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-gray-100 text-1xl">
    Made with ❤️ (Next.js)
  </div>

  <div className="absolute right-6 top-1/2 -translate-y-1/2">
    <a
      href="https://tally.so/r/mOye77"
      target="_blank"
      rel="noopener noreferrer"
      className=" bg-cyan-700 hover:shadow-[0_0_11px_rgba(59,130,246,0.6)] text-white font-semibold flex items-center justify-center py-2 px-4 h-[38px] w-[90px] rounded-2xl transition duration-200"
    >
      Connect
    </a>
  </div>
</div>


  );
};

export default Footer;
