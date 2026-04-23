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
              <Link
                to="/face"
                className="flex items-center space-x-1 text-sm text-gray-900 hover:text-pink-600 transition-colors focus:outline-none"
              >
                <span>Face</span>
              </Link>
            </div>


            <div
              className="relative"
              onMouseEnter={() => handleMouseEnter('hair')}
              onMouseLeave={handleMouseLeave}
            >
              <Link
                to="/hair"
                className="flex items-center space-x-1 text-sm text-gray-900 hover:text-pink-600 transition-colors focus:outline-none"
              >
                <span>Hair</span>
              </Link>
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
