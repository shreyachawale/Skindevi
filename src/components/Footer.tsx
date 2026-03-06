import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif">SKINDEVI</h3>
            <p className="text-sm text-gray-400 leading-relaxed">
              Authentic Ayurvedic skincare rooted in ancient wisdom, crafted for modern beauty.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/face/category" className="hover:text-pink-400 transition-colors">Face Care</Link></li>
              <li><Link to="/hair/category" className="hover:text-pink-400 transition-colors">Hair Care</Link></li>
              <li><Link to="/body/category" className="hover:text-pink-400 transition-colors">Body Care</Link></li>
              <li><Link to="/best-sellers" className="hover:text-pink-400 transition-colors">Best Sellers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/discover" className="hover:text-pink-400 transition-colors">About Us</Link></li>
              <li><Link to="/wellness" className="hover:text-pink-400 transition-colors">Wellness</Link></li>
              <li><Link to="/gifting" className="hover:text-pink-400 transition-colors">Gifting</Link></li>
              <li><Link to="/contact" className="hover:text-pink-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-serif text-lg mb-4">Connect</h4>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-pink-600 transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © 2026 SKINDEVI. All rights reserved. Crafted with ancient wisdom.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
