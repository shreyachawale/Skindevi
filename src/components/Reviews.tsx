import { Star } from 'lucide-react';

const Reviews = () => {
  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Wellness Spa Owner',
      review: 'The quality and authenticity of SKINDEVI products are exceptional. Our clients notice visible results and the natural fragrances are divine.',
      rating: 5
    },
    {
      name: 'Anjali Verma',
      role: 'Beauty Retailer',
      review: 'These Ayurvedic formulations have become our bestselling line. The traditional wisdom combined with modern elegance is exactly what our customers seek.',
      rating: 5
    },
    {
      name: 'Kavita Mehta',
      role: 'Ayurvedic Practitioner',
      review: 'Finally, products that honor authentic Ayurvedic principles. I confidently recommend SKINDEVI to my clients for their purity and effectiveness.',
      rating: 5
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-serif text-gray-900 mb-4">
            Trusted by Wellness Professionals
          </h2>
          <p className="text-lg text-gray-700">
            What our partners say about us
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8 space-y-4 border border-pink-100 hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-gold-500 text-gold-500" />
                ))}
              </div>
              <p className="text-gray-700 leading-relaxed italic">
                "{testimonial.review}"
              </p>
              <div className="pt-4 border-t border-pink-100">
                <p className="font-semibold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
