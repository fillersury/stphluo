import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Nav } from 'react-bootstrap';

interface NavigationItem {
  name: string;
  path: string;
}

interface NavigationBarProps {
  currentPage: string;
  onNavigate: (path: string) => void;
}

const NavigationBar: React.FC<NavigationBarProps> = ({ currentPage, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigationItems: NavigationItem[] = [
    { name: 'Portfolio', path: 'portfolio' },
    { name: 'About Me', path: 'about' },
    { name: 'Resume', path: 'resume' },
  ];

  const handleNavigation = (path: string): void => {
    onNavigate(path);
    setIsMenuOpen(false);
  };

  const getBackgroundClass = (page: string) => {
    switch (page) {
      case 'portfolio':
        return 'bg-stone-100';
      case 'projects/state-farm':
        return 'bg-orange-50';
      default:
        return 'bg-white';
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isMenuOpen]);

  return (
    <nav className={`${getBackgroundClass(currentPage)} top-0 z-50`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          {/* Desktop Menu */}
          <div className="hidden md:block ml-auto">
            <div className="flex items-baseline space-x-28">
              {navigationItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => handleNavigation(item.path)}
                  className={`px-3 py-2 text-base font-sans font-normal transition-colors duration-200
                    ${
                      currentPage === item.path
                      ? "text-red-300"
                      : "text-black hover:text-gray-400"
                    }`
                  }
                >
                  {item.name}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-600"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Backdrop */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-40 z-40 transition-opacity duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMenuOpen(false)}
      />

      {/* Slide-out panel */}
      <div
        className={`fixed right-0 top-0 h-full w-3/4 max-w-xs bg-white z-50 shadow-lg transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-6 flex flex-col space-y-6 h-full">
          <div className="flex justify-end">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-700 hover:text-sky-600"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          {navigationItems.map((item) => (
            <button
              key={item.path}
              onClick={() => handleNavigation(item.path)}
              className={`text-lg font-medium text-left transition-colors duration-200 ${
                currentPage === item.path
                  ? 'text-sky-600'
                  : 'text-gray-700 hover:text-sky-600'
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavigationBar;
