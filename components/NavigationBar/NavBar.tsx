"use client";
import Link from "next/link";
import React from "react";
import ThemeToggle from "../Theme";

export default function NavigationBar() {
	return (
		<div className="w-full flex justify-center py-4 mt-6">
			<div className="flex items-center justify-between w-[90%] md:w-1/2 px-6 py-6 
         text-white border-2 border-neutral-700 rounded-3xl shadow-sm">

				<div className="text-3xl font-extrabold font-serif">{'{S}'}</div>

				<nav className="flex flex-row gap-10 text-xl tracking-wider font-serif">
					<Link href="/blocks">Home</Link>
					<Link href="/resume">Resume</Link>
					<Link href="/blog">Blog</Link>
					<Link href="/books">Books</Link>
          <ThemeToggle />
				</nav>
			</div>
		</div>
	);
}
