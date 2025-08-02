
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const images = [
  '/hero-images/building1.jpg',
  '/hero-images/building2.jpg',
  '/hero-images/building3.jpg',
  '/hero-images/building4.jpg',
  '/hero-images/building5.jpg',
  '/hero-images/building6.jpg',
  '/hero-images/building7.jpg',
  '/hero-images/building8.jpg',
];

export default function ProjectGallery() {
  return (
    <section id="project-gallery" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
           <h2 className="text-5xl font-bold text-gray-800 mb-6">
            Project{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-blue-500 to-teal-500">
              Gallery
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore the visual elegance and grand architecture of VTP Monarque.
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          loop
          autoplay={{
            delay: 1500,
            disableOnInteraction: false,
          }}
          speed={1200} // Smooth transition speed (ms)
          className="rounded-2xl shadow-xl"
        >
          {images.map((src, index) => (
            <SwiperSlide key={index}>
              <div className="w-full h-[550px] overflow-hidden rounded-xl">
                <img
                  src={src}
                  alt={`Building ${index + 1}`}
                  className="w-full h-full object-cover scale-105 transition-transform duration-700 ease-in-out"
                  loading="lazy"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
