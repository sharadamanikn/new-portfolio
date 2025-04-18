import Link from "next/link";
import Image from "next/image";
const Blog = () => {
	return (
		<div className="bg-gray-950 min-h-screen flex items-start justify-center pt-16">
			<div className="w-[90%] md:w-1/2 px-6">
				<h1 className="text-gray-400 text-2xl mb-6 text-center">
					Just Me, Writing Stuff. ✍️
				</h1>

				<hr className="border-white-700 mb-10" />
				<div className="flex flex-col md:flex-row gap-6">
  <div className="flex-1 max-h-80">
    <Link href="https://sharadamanikn.blogspot.com/" target="_blank" passHref>
      <div className="relative w-full h-60 md:h-72 cursor-pointer transition-transform duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(59,130,246,0.7) hover:scale-90">
        <Image 
          src="/blog-image.png" 
          alt="Blog Image" 
          width={800}
          height={480}
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>
    </Link>
  </div>

  <div className="flex-1 flex flex-col justify-center border p-4 rounded-lg cursor-pointer transition-transform  shadow-lg border-gray-300  duration-300 ease-in-out hover:shadow-[0_0_15px_rgba(59,130,246,0.7)] hover:scale-90">
    <h2 className="text-2xl md:text-4xl font-bold mb-3 text-white">Personal Blog</h2>
    <p className="text-lg md:text-2xl font-light text-gray-300 mb-2">
      A little corner where I pour out my thoughts, share life lessons. Don&apos;t worry — it&apos;s all non-technical stuff. ☕💭
    </p>
  </div>
</div>

			</div>
		</div>
	);
};

export default Blog;
