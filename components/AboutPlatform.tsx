import React from 'react';
import SectionHeader from './SectionHeader';
import { View } from '../types';

const AboutPlatform: React.FC<{onNavigate: (view: View) => void}> = ({onNavigate}) => {
  return (
    <section className="py-20 bg-white text-gray-900 rounded-xl">
       <div className="container mx-auto px-4 sm:px-6 lg:px-8">
           <div className="grid md:grid-cols-2 gap-12 items-center">
               <div>
                    <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">Detailed Custing</p>
                    <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-gray-900 mt-2">
                        We Have Put Together A Special Combination of Strategy.
                    </h2>
               </div>
               <div>
                   <p className="text-gray-600">
                       Our platform is designed to be the single source of truth for all student activities. We streamline event discovery, simplify registration, and dramatically increase student engagement in campus life.
                   </p>
                    <button onClick={() => onNavigate({type: 'all-clubs'})} className="mt-8 bg-transparent text-gray-900 font-bold py-3 px-6 rounded-full border-2 border-gray-300 hover:bg-gray-100 hover:border-gray-400 transition-colors duration-300 flex items-center group">
                        <span>Learn More</span>
                         <div className="ml-3 h-8 w-8 rounded-full bg-gray-900 text-white flex items-center justify-center transform group-hover:translate-x-1 transition-transform">
                            &rarr;
                        </div>
                    </button>
               </div>
           </div>
       </div>
    </section>
  );
};

export default AboutPlatform;