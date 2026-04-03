import { Link } from 'react-router-dom';
import { useState } from 'react';
import hero3 from '../data/hero 3.png';
import hero4 from '../data/hero 4.png';
import hero5 from '../data/hero 5.png';
import hero6 from '../data/hero 6.png';

const Hero = () => {
  const images = [
    {
      src: hero4,
      alt: "Ayurvedic skincare 1"
    },
    {
      src: hero5,
      alt: "Ayurvedic skincare 2"
    },
    {
      src: hero6,
      alt: "Ayurvedic skincare 3"
    }
  ];

  const [current, setCurrent] = useState(0);
  const prevImage = () => {
    setCurrent((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };
  const nextImage = () => {
    setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="relative min-h-[600px] flex items-center overflow-hidden">
      {/* Slider background images */}
      <div className="absolute inset-0 w-full h-full flex transition-transform duration-[1600ms] ease-[cubic-bezier(0.77,0,0.175,1)]" style={{ transform: `translateX(-${current * 100}%)` }}>
        {images.map((img, idx) => (
          <div
            key={img.src}
            className="w-full h-full flex-shrink-0"
            style={{
              backgroundImage: `url(${img.src})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              minWidth: '100%',
              minHeight: '600px',
            }}
            aria-hidden={idx !== current}
          />
        ))}
      </div>
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* <div className="space-y-6 py-16 md:py-0">
            <h1 className="text-6xl md:text-7xl font-serif text-gray-900 leading-tight drop-shadow-lg">
              Ancient Wisdom,
              <span className="block text-pink-600">Modern Veda</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg drop-shadow">
              We are a Natural Ayurvedic Luxury brand backed by research and meticulous techniques of the ancient Ayurveda recipes blended in the modern form for glowing Beauty.
            </p>
            <Link
              to="/discover"
              className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Our Collection
            </Link>
          </div> */}
          <div className="h-[350px] md:h-[500px]" />
        </div>
        {/* Carousel controls and indicators below content */}
        <div className="flex flex-col items-center mt-8">
          <div className="flex gap-6 mb-4">
            <button
              aria-label="Previous image"
              onClick={prevImage}
              className="bg-white/90 hover:bg-white text-pink-600 rounded-full p-3 shadow-md transition-all duration-200"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="15 18 9 12 15 6" /></svg>
            </button>
            <button
              aria-label="Next image"
              onClick={nextImage}
              className="bg-white/90 hover:bg-white text-pink-600 rounded-full p-3 shadow-md transition-all duration-200"
            >
              <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="9 18 15 12 9 6" /></svg>
            </button>
          </div>
          <div className="flex gap-2">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`w-3 h-3 rounded-full ${idx === current ? 'bg-pink-600' : 'bg-pink-200'} transition-all`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
