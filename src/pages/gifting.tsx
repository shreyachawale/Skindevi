import { Gift, Sparkles, Heart, Package } from 'lucide-react';
import gifting from '../data/gifting hero.png';
import selfcare from '../data/self care.png';
import glow from '../data/glow.png';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <section className="relative h-[600px] bg-pink-50">
        <div className="absolute inset-0">
          <img
            src= {gifting}
            alt="Luxury skincare gift set"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
        </div>
        <div className="relative h-full flex items-center max-w-7xl mx-auto px-4">
          <div className="max-w-xl text-white">
            <h1 className="font-serif text-5xl md:text-6xl mb-6 leading-tight">
              Gifts That Glow
            </h1>
            <p className="text-lg mb-8 text-white/95 leading-relaxed">
              Thoughtfully curated gift sets featuring our most-loved Ayurvedic skincare treasures
            </p>
            <button className="bg-[#C79A3B] text-white px-10 py-4 rounded-full hover:bg-[#B88A2B] transition-all duration-300 transform hover:scale-105 shadow-lg tracking-wide">
              SHOP GIFT SETS
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-gray-900 mb-4">Curated Gift Collections</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8A6B6] to-[#C79A3B] mx-auto mb-6"></div>
          <p className="text-gray-700 max-w-2xl mx-auto leading-relaxed">
            Each collection is thoughtfully designed to bring joy and radiance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src= {selfcare}
                alt="Self-Care Ritual Set"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Sparkles className="w-5 h-5 text-[#C79A3B]" />
                  <span className="text-sm tracking-wider text-[#C79A3B]">BESTSELLER</span>
                </div>
                <h3 className="font-serif text-3xl mb-2">Self-Care Ritual</h3>
                <p className="text-white/90 mb-4">Complete facial care journey</p>
                <span className="inline-block border-2 border-white px-6 py-2 rounded-full text-sm tracking-wide group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="relative overflow-hidden rounded-2xl shadow-lg">
              <img
                src= {glow}
                alt="Radiant Glow Set"
                className="w-full h-[500px] object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="flex items-center gap-2 mb-3">
                  <Heart className="w-5 h-5 text-[#E8A6B6]" />
                  <span className="text-sm tracking-wider text-[#E8A6B6]">NEW</span>
                </div>
                <h3 className="font-serif text-3xl mb-2">Radiant Glow</h3>
                <p className="text-white/90 mb-4">Illuminate from within</p>
                <span className="inline-block border-2 border-white px-6 py-2 rounded-full text-sm tracking-wide group-hover:bg-white group-hover:text-gray-900 transition-all duration-300">
                  SHOP NOW
                </span>
              </div>
            </div>
          </div>
        </div>

      </section>

      <section className="bg-[#FFF8F3] py-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3738382/pexels-photo-3738382.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Personalized gifting"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border-2 border-[#E8A6B6]">
                <Gift className="w-12 h-12 text-[#D97C96] mb-2" />
                <p className="text-sm text-gray-900 font-medium">Free Gift Wrapping</p>
              </div>
            </div>
            <div>
              <h2 className="font-serif text-4xl text-gray-900 mb-6">Personalized Just for You</h2>
              <p className="text-gray-700 mb-6 leading-relaxed">
                Every gift is wrapped with care and attention to detail. Add a personal message to make it extra special.
              </p>
              <p className="text-gray-700 mb-8 leading-relaxed">
                Our signature packaging features sustainable materials adorned with delicate botanical illustrations, reflecting our commitment to both beauty and the earth.
              </p>
              <button className="border-2 border-[#D97C96] text-gray-900 px-8 py-3 rounded-full hover:bg-[#D97C96] hover:text-white transition-all duration-300 tracking-wide">
                LEARN MORE
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-20">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl text-gray-900 mb-4">Shop by Occasion</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#E8A6B6] to-[#C79A3B] mx-auto"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#E8A6B6]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E8A6B6] to-[#D97C96] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Heart className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Bridal</h3>
              <p className="text-sm text-gray-600">Pre-wedding glow</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#C79A3B]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C79A3B] to-[#B88A2B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Sparkles className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Birthday</h3>
              <p className="text-sm text-gray-600">Celebrate beauty</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#E8A6B6]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#E8A6B6] to-[#D97C96] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Package className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Thank You</h3>
              <p className="text-sm text-gray-600">Show gratitude</p>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="bg-gradient-to-br from-[#FFF8F3] to-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#C79A3B]/20">
              <div className="w-20 h-20 bg-gradient-to-br from-[#C79A3B] to-[#B88A2B] rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Gift className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-serif text-xl text-gray-900 mb-2">Just Because</h3>
              <p className="text-sm text-gray-600">Spread joy</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-[#FFF8F3] via-white to-[#FFF8F3] py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-4xl text-gray-900 mb-6">Create Your Custom Gift</h2>
          <p className="text-gray-700 mb-8 leading-relaxed max-w-2xl mx-auto">
            Can't decide? Build your own personalized gift set with our curated selection of Ayurvedic treasures. Perfect for creating something truly unique.
          </p>
          <button className="bg-gradient-to-r from-[#D97C96] to-[#C79A3B] text-white px-12 py-4 rounded-full hover:shadow-2xl transition-all duration-300 transform hover:scale-105 tracking-wide text-lg">
            BUILD YOUR SET
          </button>
        </div>
      </section>

    </div>
  );
}

export default App;
