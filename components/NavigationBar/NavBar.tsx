"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, FileText, PenLine, BookOpen, Image as ImageIcon } from "lucide-react";

export default function NavigationBar() {
	const pathname = usePathname();

	const navItems = [
		{ href: "/blocks", icon: <Home size={24} />, label: "Home" },
		{ href: "/resume", icon: <FileText size={24} />, label: "Resume" },
		{ href: "/blog", icon: <PenLine size={24} />, label: "Blog" },
		{ href: "/books", icon: <BookOpen size={24} />, label: "Books" },
		{ href: "/gallery", icon: <ImageIcon size={24} />, label: "Gallery" },
	  ];

	return (
<div className="w-full flex justify-center py-2 mt-4 sticky top-4 z-50">			
	<div
				className="flex items-center justify-between w-[90%] md:w-3/4 lg:w-1/2 px-4 py-3
         text-white border-2 border-neutral-700 rounded-3xl shadow-lg bg-gray-950 
         hover:shadow-[0_0_10px_5px_rgba(211,211,211,0.4)] transition-all"
			>
				<div className="text-2xl font-extrabold font-serif">{"{S}"}</div>

				<nav className="flex flex-row gap-6 md:gap-10 text-xl tracking-wider font-serif">
					{navItems.map((item) => (
						<Link
							key={item.href}
							href={item.href}
							className="relative flex flex-col items-center group"
						>
							<div className="hover:text-gray-400 transition">{item.icon}</div>

							<span className="absolute top-10 px-2 py-1 bg-black  text-white text-sm rounded-md opacity-0 group-hover:opacity-100 transition pointer-events-none">
								{item.label}
							</span>

							{/* Active underline */}
							{pathname === item.href && (
								<span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-5 h-1 bg-white rounded-full"></span>
							)}
						</Link>
					))}
				</nav>
			</div>
		</div>
	);
}
