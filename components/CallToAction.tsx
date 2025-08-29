import React from 'react';
import { View } from '../types';

const CallToAction: React.FC<{ onNavigate: (view: View) => void }> = ({ onNavigate }) => {
  return (
    <section className="relative py-20 bg-[#10141D] text-white rounded-xl overflow-hidden">
        <div className="absolute inset-0">
            <img src="https://picsum.photos/seed/cta/1200/400" alt="Concert" className="w-full h-full object-cover opacity-20"/>
        </div>
       <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter">
                Get Your First Ticket
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-400">
                Don't wait! The best events sell out fast. Browse the full list of upcoming events and secure your spot today.
            </p>
            <button onClick={() => onNavigate({type: 'all-events'})} className="mt-8 bg-white text-gray-900 font-bold py-3 px-6 rounded-full border-2 border-transparent hover:bg-gray-200 transition-colors duration-300 flex items-center group mx-auto">
                <span>See More</span>
                 <div className="ml-3 h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                    &rarr;
                </div>
            </button>
       </div>
    </section>
  );
};

export default CallToAction;