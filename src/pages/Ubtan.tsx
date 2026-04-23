import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// use different images if you have them
import ubtan1 from '../data/Chameli.png';
import ubtan2 from '../data/Chandni.png';
import ubtan3 from '../data/Shahi.png';
import ubtan4 from '../data/Husn.png';
import ubtan5 from '../data/Sundri.png';

const Ubtan = () => {
  const ubtans = [
    {
      title: 'Shahi Ubtan',
      image: ubtan3,
      description: 'A royal blend for deep nourishment and radiant glow',
      link: '/product/shahi-ubtan'
    },
    {
      title: 'Chandni Ubtan',
      image: ubtan2,
      description: 'Brightening blend for luminous, even-toned skin',
      link: '/product/chandni-ubtan'
    },
    {
      title: 'Chameli Ubtan',
      image: ubtan1,
      description: 'Soothing floral mix to calm and refresh your skin',
      link: '/product/chameli-ubtan'
    },
    {
      title: 'Sundri Ubtan',
      image: ubtan5,
      description: 'Enhances natural beauty with gentle exfoliation',
      link: '/product/sundri-ubtan'
    },
    {
      title: 'Husn Ubtan',
      image: ubtan4,
      description: 'Traditional formula for timeless Ayurvedic skincare',
      link: '/product/husn-ubtan'
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50 min-h-screen">
      <div className="w-full px-6 md:px-10 lg:px-16">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Ubtans
          </h2>
          <p className="text-lg text-gray-700">
            Traditional Ayurvedic powders crafted for naturally glowing skin
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {ubtans.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 space-y-2">
                <h3 className="text-xl font-serif text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  {item.description}
                </p>

                <div className="flex items-center text-pink-600 font-medium pt-2 group-hover:gap-2 transition-all">
                  <span className="text-sm">Explore</span>
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

export default Ubtan;