import { useState } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

type TestimonialType = {
  id: number;
  text: string;
  author: string;
  role: string;
  image: string;
};

const testimonials: TestimonialType[] = [
  {
    id: 1,
    text: "This Ayurvedic skincare has transformed my skin completely. The natural ingredients work in harmony with my skin, giving me a radiance I've never experienced before.",
    author: "Priya Sharma",
    role: "Wellness Consultant",
    image:
      "https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    text: "I've tried countless skincare brands, but nothing compares to the purity and effectiveness of these products. My skin feels nourished and balanced every single day.",
    author: "Ananya Desai",
    role: "Yoga Instructor",
    image:
      "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    text: "The perfect blend of ancient wisdom and modern skincare. These products have become an essential part of my daily self-care ritual. Absolutely transformative.",
    author: "Meera Kapoor",
    role: "Holistic Health Coach",
    image:
      "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    text: "Finally, a skincare line that understands my skin's needs. The natural formulations are gentle yet powerful, giving visible results without harsh chemicals.",
    author: "Ishita Reddy",
    role: "Ayurveda Practitioner",
    image:
      "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToTestimonial = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-white flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="h-px w-12 bg-gradient-to-r from-[#C79A3B] to-[#E8A6B6] mx-auto"></div>
          </div>
          <h2 className="text-5xl font-serif text-gray-900 mb-6">
          Trusted by Our Community
        </h2>
        </div>

        <div className="relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-700 ease-in-out"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {testimonials.map((testimonial) => (
                <div
                  key={testimonial.id}
                  className="w-full flex-shrink-0 px-4"
                >
                  <div className="bg-white rounded-3xl p-12 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_12px_40px_rgb(0,0,0,0.08)] transition-all duration-500 max-w-3xl mx-auto">
                    <div className="mb-8">
                      <Quote
                        className="w-12 h-12 text-[#E8A6B6] opacity-40"
                        strokeWidth={1.5}
                      />
                    </div>

                    <p
                      className="text-[#111] text-lg leading-relaxed mb-10 font-light"
                      style={{ fontFamily: "Georgia, serif" }}
                    >
                      {testimonial.text}
                    </p>

                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#E8A6B6] to-[#C79A3B] opacity-20 blur-sm"></div>
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-16 h-16 rounded-full object-cover relative border-2 border-white shadow-md"
                        />
                      </div>
                      <div>
                        <h4
                          className="text-[#111] font-semibold text-lg"
                          style={{ fontFamily: "Georgia, serif" }}
                        >
                          {testimonial.author}
                        </h4>
                        <p className="text-[#C79A3B] text-sm font-medium tracking-wide">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-center gap-6 mt-12">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-[#E8A6B6] text-[#D97C96] hover:bg-[#E8A6B6] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? "w-8 bg-gradient-to-r from-[#D97C96] to-[#C79A3B]"
                      : "w-2 bg-gray-300 hover:bg-[#E8A6B6]"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-[#E8A6B6] text-[#D97C96] hover:bg-[#E8A6B6] hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;