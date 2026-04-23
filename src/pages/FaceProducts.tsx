import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ubtanImage from '../data/powder.png';   // you can change if needed
import serumImage from '../data/serum.png';

const FaceProducts = () => {
  const categories = [
    {
      title: 'Ubtans',
      image: ubtanImage,
      description: 'Traditional Ayurvedic powders for gentle cleansing and natural glow',
      link: '/face/ubtans'
    },
    {
      title: 'Serums',
      image: serumImage,
      description: 'Concentrated botanical elixirs for radiant, nourished skin',
      link: '/face/serums'
    },
  ];

  return (
    <section className="pt-12 pb-24 bg-gradient-to-b from-white to-pink-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Face Care
          </h2>
          <p className="text-lg text-gray-700">
            Simple, effective Ayurvedic essentials for your skin
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-2xl font-serif text-gray-900">
                  {category.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {category.description}
                </p>

                <div className="flex items-center text-pink-600 font-medium pt-1 group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FaceProducts;