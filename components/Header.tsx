
import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import type { NavLinkItem } from '../types';
import { FaBars, FaTimes } from 'react-icons/fa';

const navLinks: NavLinkItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Products', path: '/products' },
  { name: 'Services', path: '/services' },
  { name: 'Partners', path: '/partners' },
  { name: 'Clients', path: '/clients' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact Us', path: '/contact' },
];

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const activeLinkClass = 'text-orange-600 dark:text-orange-400';
  const inactiveLinkClass = 'text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors duration-300';

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <NavLink to="/" className="flex items-center">
              <img src="/logo.png" alt="Chathur Infotech" className="h-12 w-auto" />
            </NavLink>
          </div>
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>
          </nav>
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 focus:outline-none"
            >
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `block px-3 py-2 rounded-md text-base font-medium ${isActive ? activeLinkClass : inactiveLinkClass}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
