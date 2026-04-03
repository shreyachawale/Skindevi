import BeforeAfterSlider from "./BeforeAfterSlider";

type BeforeAfterSection = {
  beforeImage: string;
  afterImage: string;
  title: string;
  description: string;
};

const sections: BeforeAfterSection[] = [
  {
    beforeImage:
      "https://images.pexels.com/photos/3616956/pexels-photo-3616956.jpeg?auto=compress&cs=tinysrgb&w=1200",
    afterImage:
      "https://images.pexels.com/photos/3738388/pexels-photo-3738388.jpeg?auto=compress&cs=tinysrgb&w=1200",
    title: "Radiant Skin Revival",
    description:
      "Our signature herbal treatments work in harmony with your natural beauty, revealing a luminous complexion from within.",
  },
];

const BeforeAfter = () => {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Heading */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-serif font-bold text-gray-900 mb-4">
            Transformation Gallery
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8A6B6] via-[#D97C96] to-[#C79A3B] mx-auto mb-6 rounded-full"></div>
          <p className="text-lg text-gray-800 max-w-2xl mx-auto leading-relaxed">
            Experience the journey of transformation through our premium
            Ayurvedic treatments. Slide to reveal the beautiful changes.
          </p>
        </div>

        {/* Sections */}
        <div className="space-y-20">
          {sections.map((section, index) => (
            <div key={index}>
              <BeforeAfterSlider
                beforeImage={section.beforeImage}
                afterImage={section.afterImage}
                beforeLabel="before"
                afterLabel="after"
              />

              <div className="mt-8 text-center">
                <h3 className="text-2xl font-serif font-semibold text-gray-900 mb-3">
                  {section.title}
                </h3>
                <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
                  {section.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#E8A6B6] to-[#D97C96] px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer group">
            <span className="text-white font-medium text-lg">
              Begin Your Transformation
            </span>
            <svg
              className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfter;