import { Leaf, Sparkles, Heart } from 'lucide-react';

const BrandPhilosophy = () => {
  const values = [
    {
      icon: Leaf,
      title: 'Cruelty free and totally safe',
      description: 'Crafted with authentic Ayurvedic herbs and botanical extracts, free from harmful chemicals.'
    },
    {
      icon: Sparkles,
      title: '99% natural ingredients',
      description: 'Produced exclusively in our farms, packaged and brought  to your hand. '
    },
    {
      icon: Heart,
      title: 'Holistic Wellness',
      description: 'Our products take care of overall skincare concerns of every skin type and make sure you are glowing always! '
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-serif text-gray-900 mb-6">
          Our Philosophy
        </h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-16 max-w-3xl mx-auto">
          At SKINDEVI, We believe skincare is a journey and a healthy routine helps to keep skin happy and super healthy. Each formulation is a sacred blend of nature's finest ingredients, honoring traditions passed down through millennia.
        </p>

        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {values.map((value, index) => (
            <div key={index} className="space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-pink-50 text-pink-600 mb-4">
                <value.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-serif text-gray-900">{value.title}</h3>
              <p className="text-gray-700 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandPhilosophy;
