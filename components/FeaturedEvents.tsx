import React from 'react';
import { EVENTS } from '../constants';
import { View } from '../types';

interface FeaturedEventsProps {
    onNavigate: (view: View) => void;
}

const FeaturedEvents: React.FC<FeaturedEventsProps> = ({ onNavigate }) => {
  const featuredEvent = EVENTS.find(e => e.isFeatured);

  if (!featuredEvent) return null;

  return (
    <section className="py-20 bg-[#10141D] text-white rounded-xl">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-left max-w-xl">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter">Decide To Join The Event.</h2>
                <p className="mt-4 text-gray-400">
                    Don't miss out on our flagship event of the season. A full day of innovation, learning, and connection awaits. Secure your spot now.
                </p>
                <a href="#" className="mt-4 text-sm inline-block text-gray-400 hover:text-white">Scroll Down To Discover &darr;</a>
            </div>
            <div className="mt-10 relative">
                <img 
                    src={featuredEvent.imageUrl} 
                    alt={featuredEvent.name}
                    className="w-full h-[500px] object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20 rounded-lg"></div>
                <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md p-4 rounded-lg text-white">
                    <p className="text-xs">REMAINING TIMES</p>
                    <p className="text-2xl font-bold">23 : 03 : 06</p>
                    <p className="text-xs">Hours Minute Second</p>
                </div>
                <button 
                    onClick={() => onNavigate({ type: 'event-detail', eventId: featuredEvent.id })}
                    className="absolute bottom-8 left-8 bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center"
                >
                    <span>Attend The Event</span>
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                </button>
            </div>
        </div>
    </section>
  );
};

export default FeaturedEvents;