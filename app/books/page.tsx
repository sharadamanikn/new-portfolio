import React from "react";

const books = [
  {
    title: "Don't Believe Everything You Think",
    author: "Joseph Nguyen",
    description: "A guide to cognitive behavioral therapy.",
  },
  {
    title: "Who Will Cry When You Die?",
    author: "Robin Sharma",
    description: "A collection of 101 lessons to live a meaningful life.",
  },
  {
    title: "Energize Your Mind",
    author: "Gaur Gopal Das",
    description: "A guide to self-improvement and mindfulness.",
  },
  {
    title: "Eat That Frog",
    author: "Brian Tracy",
    description: "21 great ways to stop procrastinating and get more done in less time.",
  },
];

const BooksPage = () => {
  return (
    <div className="bg-gray-950 min-h-screen  flex justify-center pt-8 px-4 ">
      <div className=" max-w-4xl flex flex-col items-center w-[90%] md:w-1/2 px-6 py-6">
        <p className="text-gray-400 text-1xl mb-6 text-center">
          Here are some books that have had a profound impact on me. <br />
          Growth isn&apos;t just technical — it&apos;s ethical, emotional, and intellectual too.
          Must-reads for anyone in their 20&apos;s.📘
        </p>

        <hr className="border-white-700 mb-10 w-full" />

        <div className="grid grid-cols-1  md:grid-cols-2 gap-6 w-full hover:shadow-[0_0_15px_rgba(59,130,246,0.7)">
          {books.map((book, index) => (
            <div
              key={index}
              className="p-6 rounded-2xl border border-white   backdrop-blur shadow-lg  hover:shadow-[0_0_15px_rgba(59,130,246,0.7)]  cursor-pointer hover:scale-105 transition-transform duration-300 h-50"
            >
              <h3 className="text-white text-xl font-semibold mb-1">{book.title}</h3>
              <p className="text-gray-300 text-sm italic mb-2">by {book.author}</p>
              <p className="text-gray-400 text-sm">{book.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BooksPage;