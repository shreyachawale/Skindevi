import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import serumImage from '../data/Kumkumadi Gel.png';   // you can change if needed

const Serums = () => {
  const serums = [
    {
      title: 'Kumkumadi Gel',
      image: serumImage,
      description: 'A luxurious Ayurvedic formulation for radiant, glowing and youthful skin',
      link: '/product/kumkumadi-gel'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Serums
          </h2>
          <p className="text-lg text-gray-700">
            Potent Ayurvedic elixirs crafted for deep skin nourishment
          </p>
        </div>

        {/* Card (centered) */}
        <div className="flex justify-center">
          {serums.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 w-full max-w-md"
            >
              {/* Image */}
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-8 space-y-4">
                <h3 className="text-3xl font-serif text-gray-900">
                  {item.title}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center text-pink-600 font-medium pt-2 group-hover:gap-2 transition-all">
                  <span>Explore</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Serums;