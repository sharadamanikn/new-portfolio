import React from "react";
import Link from "next/link";
import { Github, Linkedin, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-gray-1000 border-t border-neutral-600 py-6 flex justify-center">
      <div className="w-[90%] md:w-3/4 lg:w-1/2 flex flex-col md:flex-row justify-between items-center">
        <div className="text-gray-100 text-1xl mb-2 md:mb-0">
          © {new Date().getFullYear()} Sharadamani K N
        </div>
        <div className="flex-grow text-center text-1xl text-gray-100 ">
          Made with (Next.js) ❤️
        </div>

        <div className="flex gap-6 text-sm text-gray-100">
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
      </div>
    </div>
  );
};

export default Footer;
