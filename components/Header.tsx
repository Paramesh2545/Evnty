import React, { useState } from 'react';
import { View } from '../types';

interface HeaderProps {
  onNavigate: (view: View) => void;
}

const NavLink: React.FC<{
  onClick: () => void;
  children: React.ReactNode;
}> = ({ onClick, children }) => (
  <button
    onClick={onClick}
    className="text-gray-300 hover:text-white relative after:content-[''] after:absolute after:left-0 after:bottom-[-2px] after:w-0 after:h-[2px] after:bg-white after:transition-all after:duration-300 hover:after:w-full px-1 py-2 text-sm font-semibold"
  >
    {children}
  </button>
);

const MobileNavLink: React.FC<{
    onClick: () => void;
    children: React.ReactNode;
}> = ({ onClick, children }) => (
    <button
      onClick={onClick}
      className="block text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-base font-medium transition-colors w-full text-left"
    >
      {children}
    </button>
  );

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const handleNav = (view: View) => {
    onNavigate(view);
    setMobileMenuOpen(false);
  }

  return (
    <header className="bg-[#0D1117]/80 backdrop-blur-md shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex items-center">
            <button onClick={() => handleNav({ type: 'home' })} className="flex-shrink-0 flex items-center space-x-2 group">
              <span className="text-white text-2xl font-black tracking-tighter">Evnty.</span>
            </button>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              <NavLink onClick={() => handleNav({ type: 'home' })}>Home</NavLink>
              <NavLink onClick={() => handleNav({ type: 'all-clubs' })}>Clubs</NavLink>
              <NavLink onClick={() => handleNav({ type: 'all-events' })}>Events</NavLink>
              <NavLink onClick={() => handleNav({ type: 'external-events' })}>Opportunities</NavLink>
            </div>
          </div>
          <div className="hidden md:block">
             <button className="text-white bg-indigo-600 hover:bg-indigo-700 text-sm font-semibold px-5 py-2 rounded-lg transition-colors">Subscribe</button>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
              type="button"
              className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                 <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                 </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
       {isMobileMenuOpen && (
        <div className="md:hidden" id="mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileNavLink onClick={() => handleNav({ type: 'home' })}>Home</MobileNavLink>
            <MobileNavLink onClick={() => handleNav({ type: 'all-clubs' })}>Clubs</MobileNavLink>
            <MobileNavLink onClick={() => handleNav({ type: 'all-events' })}>Events</MobileNavLink>
            <MobileNavLink onClick={() => handleNav({ type: 'external-events' })}>Opportunities</MobileNavLink>
            </div>
        </div>
       )}
    </header>
  );
};

export default Header;