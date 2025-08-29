import React from 'react';
import { View } from '../types';

interface FooterProps {
    onNavigate: (view: View) => void;
}

const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  return (
    <footer className="bg-[#10141D] text-white mt-auto pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Logo and Info */}
          <div className="col-span-2 md:col-span-2">
            <h3 className="text-2xl font-black tracking-tighter">Evnty.</h3>
            <p className="mt-4 text-gray-400 max-w-xs">
              The official hub for clubs, events, and campus life at the University of Excellence.
            </p>
          </div>

          {/* Studios */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Navigation</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={() => onNavigate({ type: 'home' })} className="text-gray-300 hover:text-white transition-colors">Home</button></li>
              <li><button onClick={() => onNavigate({ type: 'all-clubs' })} className="text-gray-300 hover:text-white transition-colors">Clubs</button></li>
              <li><button onClick={() => onNavigate({ type: 'all-events' })} className="text-gray-300 hover:text-white transition-colors">Events</button></li>
            </ul>
          </div>

           {/* Features */}
           <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Resources</h3>
            <ul className="mt-4 space-y-3">
              <li><button onClick={() => onNavigate({ type: 'external-events' })} className="text-gray-300 hover:text-white transition-colors">Opportunities</button></li>
               <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold tracking-wider uppercase text-gray-400">Social</h3>
            <ul className="mt-4 space-y-3">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Twitter</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Youtube</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-gray-500">
            <p>&copy; {new Date().getFullYear()} Evnty. All Rights Reserved.</p>
            <a href="#" className="hover:text-white mt-4 sm:mt-0">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;