import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Bestsellers = () => {
  const categories = [
    {
      title: 'Serums',
      image: 'https://images.pexels.com/photos/7755515/pexels-photo-7755515.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Concentrated botanical elixirs for radiant skin',
      link: '/bestsellers/serums'
    },
    {
      title: 'Hair Oils',
      image: 'https://images.pexels.com/photos/7755404/pexels-photo-7755404.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Nourishing oils for lustrous, healthy hair',
      link: '/bestsellers/hair-oils'
    },
    {
      title: 'Powder Face Wash',
      image: 'https://images.pexels.com/photos/7755396/pexels-photo-7755396.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Traditional cleansing powders for pure, glowing skin',
      link: '/bestsellers/powder-facewash'
    },
    {
      title: 'Toner',
      image: 'https://images.pexels.com/photos/6621339/pexels-photo-6621339.jpeg?auto=compress&cs=tinysrgb&w=800',
      description: 'Refreshing hydrosols to balance and prepare skin',
      link: '/bestsellers/toner'
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-pink-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Best Sellers
          </h2>
          <p className="text-lg text-gray-700">
            Our most loved Ayurvedic formulations
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, index) => (
            <Link
              key={index}
              to={category.link}
              className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-2xl font-serif text-gray-900">{category.title}</h3>
                <p className="text-sm text-gray-700 leading-relaxed">{category.description}</p>
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

export default Bestsellers;
