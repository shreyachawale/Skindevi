import { ArrowRight, Check, Star } from 'lucide-react';
import allProd from '../data/allProd.png'

export default function TrialKits() {
  return (
    <div className="bg-white min-h-screen overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-start justify-center pt-24 pb-20 px-6 md:px-12 overflow-hidden">

  {/* Background Image */}
  <div className="absolute inset-0 z-10">
    <img
      src={allProd}
      alt="background"
      className="w-full h-full object-cover"
    />
  </div>

  {/* Content */}
  <div className="relative z-20 max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">

    {/* LEFT */}
    <div className="space-y-8 text-black">
      <div className="space-y-4">
        <p className="text-sm font-semibold tracking-widest text-[#111] uppercase">
          Discover Pure Wellness
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-[#111] leading-tight">
          Try Before You Buy
        </h1>
        <p className="text-lg text-[#222] leading-relaxed max-w-lg">
          Experience the transformative power of Ayurvedic wellness with our curated trial kits.
        </p>
      </div>

      <div className="flex gap-4 pt-4">
        <button className="px-8 py-4 bg-[#D97C96] text-white rounded-full">
          Explore Trials
        </button>
        <button className="px-8 py-4 border-2 border-[#D97C96] rounded-full">
          Learn More
        </button>
      </div>
    </div>
  </div>
</section>
      {/* Product Cards Section */}
      <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-white via-white to-[#F8F8F8]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <p className="text-sm font-semibold tracking-widest text-[#D97C96] uppercase">
              Our Collections
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111]">
              Three Perfect Starter Sets
            </h2>
            <p className="text-lg text-[#222] max-w-2xl mx-auto">
              Choose the trial kit that matches your wellness goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: 'Radiance Ritual',
                description: 'Illuminate your skin with our essential glow collection',
                price: '$29',
                items: ['Face Serum', 'Nourishing Mask', 'Silk Moisturizer'],
                accent: '#D97C96',
              },
              {
                name: 'Serenity Spa',
                description: 'Complete relaxation with our luxe body care essentials',
                price: '$34',
                items: ['Body Oil', 'Bath Salts', 'Cooling Gel'],
                accent: '#C79A3B',
              },
              {
                name: 'Wellness Warrior',
                description: 'Full-spectrum wellness for mind, body, and spirit',
                price: '$44',
                items: ['Face & Body Oil', 'Herbal Tea', 'Aromatherapy Blend', 'Wellness Guide'],
                accent: '#8B9C7D',
              },
            ].map((kit, index) => (
              <div
                key={index}
                className="group relative animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-[#F8F8F8] rounded-2xl transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-[#111]/10" />
                <div className="relative bg-white rounded-2xl p-8 md:p-10 h-full border border-[#E8A6B6]/20 transition-all duration-500 group-hover:border-[#D97C96]/40 overflow-hidden">
                  {/* Decorative accent */}
                  <div
                    className="absolute top-0 right-0 w-24 h-24 opacity-10 rounded-full transition-transform duration-500 group-hover:scale-150"
                    style={{ backgroundColor: kit.accent }}
                  />

                  <div className="relative space-y-6">
                    <div>
                      <h3 className="text-2xl font-serif text-[#111] mb-2">{kit.name}</h3>
                      <p className="text-[#222] text-sm leading-relaxed">{kit.description}</p>
                    </div>

                    <div className="pt-4 border-t border-[#E8A6B6]/20">
                      <p className="text-3xl font-serif text-[#111] mb-1">{kit.price}</p>
                      <p className="text-xs text-[#222]">Limited trial size</p>
                    </div>

                    <div className="space-y-3">
                      <p className="text-xs font-semibold text-[#222] uppercase tracking-widest">
                        Includes
                      </p>
                      {kit.items.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <Check className="w-4 h-4 text-[#D97C96] flex-shrink-0" />
                          <span className="text-sm text-[#222]">{item}</span>
                        </div>
                      ))}
                    </div>

                    <button
                      className="w-full mt-6 px-6 py-3 rounded-full font-medium text-white transition-all duration-300 transform group-hover:scale-105 relative overflow-hidden"
                      style={{ backgroundColor: kit.accent }}
                    >
                      <span className="relative z-10">Try This Kit</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500" />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16 animate-fadeInUp">
            <p className="text-sm font-semibold tracking-widest text-[#D97C96] uppercase">
              Simple Process
            </p>
            <h2 className="text-4xl md:text-5xl font-serif text-[#111]">
              How It Works
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Select Your Kit', description: 'Choose a trial set that resonates with your wellness goals' },
              { step: '02', title: 'Place Order', description: 'Secure checkout with premium packaging included' },
              { step: '03', title: 'Experience', description: 'Enjoy a full 30 days to test and discover your favorites' },
              { step: '04', title: 'Upgrade', description: 'Get 20% off when you buy the full-size version' },
            ].map((item, index) => (
              <div
                key={index}
                className="relative animate-fadeInUp"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#E8A6B6]/20 border-2 border-[#D97C96]/40">
                      <span className="font-serif text-2xl text-[#D97C96]">{item.step}</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-serif text-[#111] mb-3">{item.title}</h3>
                  <p className="text-[#222] leading-relaxed flex-grow">{item.description}</p>

                  {index < 3 && (
                    <div className="hidden md:flex absolute -right-12 top-8 text-[#D97C96]/30">
                      <ArrowRight className="w-6 h-6" />
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fadeInUp">
          <h2 className="text-5xl md:text-6xl font-serif text-[#111] leading-tight">
            Ready to Begin Your Wellness Journey?
          </h2>
          <p className="text-xl text-[#222] leading-relaxed max-w-2xl mx-auto">
            Start with our curated trial kits and discover the transformative power of Ayurvedic wellness. Join thousands of satisfied customers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <button className="group relative inline-flex items-center justify-center px-10 py-5 bg-gradient-to-r from-[#D97C96] to-[#C79A3B] text-white rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-[#D97C96]/40 transform hover:scale-105">
              <span className="relative z-10 flex items-center gap-2">
                Shop Trial Kits
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#C79A3B] to-[#D97C96] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
            <button className="px-10 py-5 border-2 border-[#D97C96] text-[#111] rounded-full font-semibold text-lg hover:bg-[#E8A6B6]/10 transition-all duration-300">
              View Full Collection
            </button>
          </div>

          <div className="pt-8 border-t border-[#E8A6B6]/20">
            <p className="text-sm text-[#222] flex items-center justify-center gap-2">
              <Check className="w-4 h-4 text-[#D97C96]" />
              Free shipping on orders over $50 • 30-day money-back guarantee
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
