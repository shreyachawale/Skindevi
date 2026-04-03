import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';

const Navbar = () => {

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [dropdownOpenByClick, setDropdownOpenByClick] = useState<string | null>(null);


  const handleMouseEnter = (menu: string) => {
    if (!dropdownOpenByClick) {
      setActiveDropdown(menu);
    }
  };

  const handleMouseLeave = () => {
    if (!dropdownOpenByClick) {
      setActiveDropdown(null);
    }
  };

  const handleDropdownClick = (menu: string) => {
    if (activeDropdown === menu && dropdownOpenByClick === menu) {
      setActiveDropdown(null);
      setDropdownOpenByClick(null);
    } else {
      setActiveDropdown(menu);
      setDropdownOpenByClick(menu);
    }
  };

  // Close dropdown if clicking anywhere else
  // (useEffect is needed for this logic)
  useEffect(() => {
    if (!dropdownOpenByClick) return;
    const handleDocumentClick = (e: MouseEvent) => {
      const nav = document.getElementById('main-navbar');
      if (nav && !nav.contains(e.target as Node)) {
        setActiveDropdown(null);
        setDropdownOpenByClick(null);
      }
    };
    document.addEventListener('mousedown', handleDocumentClick);
    return () => document.removeEventListener('mousedown', handleDocumentClick);
  }, [dropdownOpenByClick]);


  return (
    <nav id="main-navbar" className="bg-white border-b border-gray-100 sticky top-0 z-50">
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
              <button
                type="button"
                className="flex items-center space-x-1 text-sm text-gray-900 hover:text-pink-600 transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'face'}
                onClick={() => handleDropdownClick('face')}
              >
                <span>Face</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'face' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
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
              <button
                type="button"
                className="flex items-center space-x-1 text-sm text-gray-900 hover:text-pink-600 transition-colors focus:outline-none"
                aria-haspopup="true"
                aria-expanded={activeDropdown === 'hair'}
                onClick={() => handleDropdownClick('hair')}
              >
                <span>Hair</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              {activeDropdown === 'hair' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-gray-100 py-2 z-50">
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

            <a
              href="/#contact"
              className="text-sm text-gray-900 hover:text-pink-600 transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
