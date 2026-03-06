import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-pink-50 via-white to-amber-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-serif text-gray-900 leading-tight">
              Ancient Wisdom,
              <span className="block text-pink-600">Modern Veda</span>
            </h1>
            <p className="text-lg text-gray-700 leading-relaxed max-w-lg">
              We are a Natural Ayurvedic Luxury brand backed by research and meticulous techniques of the ancient Ayurveda recipes blended in the modern form for glowing Beauty.
            </p>
            <Link
              to="/discover"
              className="inline-block bg-gradient-to-r from-pink-600 to-pink-700 text-white px-8 py-4 rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Explore Our Collection
            </Link>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-full overflow-hidden bg-gradient-to-br from-pink-100 to-amber-100 p-8">
              <img
                src="https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Ayurvedic skincare"
                className="w-full h-full object-cover rounded-full"
              />
            </div>
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-gold-400 rounded-full opacity-20 blur-2xl"></div>
            <div className="absolute -bottom-4 -left-4 w-40 h-40 bg-pink-400 rounded-full opacity-20 blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
