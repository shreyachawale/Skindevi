import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleMouseEnter = (menu: string) => {
    setActiveDropdown(menu);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  const dropdownLinks = [
    { label: 'Shop by Category', path: '/category' },
    { label: 'Shop by Concern', path: '/concern' }
  ];

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center">
            <h1 className="text-2xl font-serif text-gray-900">
              SKINDEVI
              <span className="block text-xs tracking-widest font-sans text-gray-600">
                Ancient Ayurveda
              </span>
            </h1>
          </Link>

          <div className="flex items-center space-x-8">
            <Link
              to="/try-before-buy"
              className="text-sm text-gray-900 hover:text-pink-600 transition-colors"
            >
              Try Before You Buy
            </Link>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('face')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-sm text-gray-900 hover:text-pink-600 transition-colors">
                <span>Face</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'face' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/face/category"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    Shop by Category
                  </Link>
                  <Link
                    to="/face/concern"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    Shop by Concern
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('hair')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-sm text-gray-900 hover:text-pink-600 transition-colors">
                <span>Hair</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'hair' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/hair/category"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    Shop by Category
                  </Link>
                  <Link
                    to="/hair/concern"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    Shop by Concern
                  </Link>
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('body')}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center space-x-1 text-sm text-gray-900 hover:text-pink-600 transition-colors">
                <span>Body</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'body' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2">
                  <Link
                    to="/body/category"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    Shop by Category
                  </Link>
                  <Link
                    to="/body/concern"
                    className="block px-4 py-2 text-sm text-gray-900 hover:bg-pink-50 hover:text-pink-600 transition-colors"
                  >
                    Shop by Concern
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/wellness"
              className="text-sm text-gray-900 hover:text-pink-600 transition-colors"
            >
              Wellness
            </Link>

            <Link
              to="/discover"
              className="text-sm text-gray-900 hover:text-pink-600 transition-colors"
            >
              Discover
            </Link>

            <Link
              to="/gifting"
              className="text-sm text-gray-900 hover:text-pink-600 transition-colors"
            >
              Gifting
            </Link>

            <Link
              to="/best-sellers"
              className="text-sm text-gray-900 hover:text-pink-600 transition-colors"
            >
              Best Sellers
            </Link>

            <Link
              to="/contact"
              className="text-sm text-gray-900 hover:text-pink-600 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
