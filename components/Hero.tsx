import React from 'react';
import { View } from '../types';

const Hero: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <section className="py-20 text-center md:text-left bg-white rounded-xl text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
        <div className="md:col-span-3">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-black text-gray-900 leading-tight tracking-tighter">
            Find Amazing Events happening in{' '}
            <span className="inline-block relative md:mr-48">
              The
              <img
                src="https://picsum.photos/seed/hero1/200/80"
                alt="Event snapshot"
                className="hidden md:inline-block absolute top-1/2 left-full transform -translate-y-1/2 ml-4 h-16 w-40 object-cover rounded-full"
              />
            </span>{' '}
            College.
          </h1>
          <p className="mt-8 max-w-2xl text-lg text-gray-600">
            Your complete guide to clubs and events at the University of Excellence. Explore, Participate, and Lead in a vibrant community of innovators.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4">
             <button
                onClick={() => onNavigate({type: 'all-events'})}
                className="w-full sm:w-auto flex items-center justify-center px-8 py-4 bg-gray-900 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors shadow-lg"
              >
              Get Ticket
            </button>
            <div className="text-gray-500 font-medium">Sponsored by: Border, hues, Leafe</div>
          </div>
        </div>
        <div className="md:col-span-2 relative h-96">
            <div className="absolute top-0 right-1/4 w-60 h-80 bg-gray-800 rounded-lg transform -rotate-12 transition-transform duration-500 hover:rotate-0 hover:scale-105 animate-float" style={{animationDelay: '0.5s'}}>
                <img src="https://picsum.photos/seed/ticket1/300/400" className="w-full h-full object-cover rounded-lg" alt="Ticket 1"/>
                <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                 <div className="absolute bottom-4 left-4 text-white">
                    <p className="font-bold text-lg">ONE WAY TICKET</p>
                    <p className="text-xs">***</p>
                </div>
            </div>
             <div className="absolute bottom-0 left-1/4 w-60 h-80 bg-white rounded-lg transform rotate-6 transition-transform duration-500 hover:rotate-0 hover:scale-105 animate-float shadow-2xl border">
                <img src="https://picsum.photos/seed/ticket2/300/400" className="w-full h-52 object-cover rounded-t-lg" alt="Ticket 2"/>
                <div className="p-4 text-gray-900">
                    <p className="font-bold text-lg">ONE WAY TICKET</p>
                    <p className="text-yellow-500 text-xs">***</p>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;