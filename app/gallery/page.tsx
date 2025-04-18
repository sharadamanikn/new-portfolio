import Image from "next/image";

const images = [
  "/image1.jpg",
  "/image2.jpg",
  "/image3.jpg",
  "/image4.jpg",
  "/image5.jpg",
  "/image6.jpg",
  
];

const GalleryPage = () => {
  return (
    <div className="bg-gray-950 flex flex-col items-center pt-8 px-4 md:px-0">
      <p className="text-gray-400 text-2xl mb-6 text-center">
        A little visual space where I collect snapshots, moments, and things I love.❤️
      </p>
      <hr className="border-white-700 mb-10 w-full md:w-1/2" />

      <div className="columns-2 md:columns-3 gap-4 w-full md:w-1/2 mb-10">
        {images.map((src, index) => (
          <div key={index} className="mb-4 overflow-hidden rounded-2xl">
            {index === 2 ? (
              <video
                src="/video.mp4" 
                width={600}
                height={400}
                autoPlay
                loop
                muted 
                className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            ) : (
              <Image
                src={src}
                alt={`Gallery Image ${index + 1}`}
                width={600}
                height={400}
                className="w-full h-auto rounded-2xl transition-transform duration-300 hover:scale-105"
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
export default GalleryPage;
