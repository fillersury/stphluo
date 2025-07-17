import React, { useState } from 'react';
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
    case 'resume':
      return 'bg-blue-100';
    default:
      return 'bg-white';
  }
};

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
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
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
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
            {navigationItems.map((item) => (
              <button
                key={item.path}
                onClick={() => handleNavigation(item.path)}
                className={`block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-200 ${
                  currentPage === item.path
                    ? 'text-indigo-600 bg-indigo-50'
                    : 'text-gray-700 hover:text-indigo-600 hover:bg-gray-50'
                }`}
                style={currentPage === item.path ? { color: '#4f46e5' } : { color: '#374151' }}
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavigationBar;
