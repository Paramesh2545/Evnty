import React from 'react';
import { CLUBS } from '../constants';
import SectionHeader from './SectionHeader';
import { View } from '../types';

interface AllClubsProps {
  onNavigate: (view: View) => void;
}

const AllClubs: React.FC<AllClubsProps> = ({ onNavigate }) => {
  return (
    <section className="py-12">
       <SectionHeader title="Student Clubs" subtitle="Explore our vibrant student community and find your passion. All clubs, one hub."/>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {CLUBS.map((club) => (
          <div
            key={club.id}
            onClick={() => onNavigate({ type: 'club', clubId: club.id })}
            className="group cursor-pointer bg-[#10141D] border border-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-indigo-500/20 hover:border-indigo-500/50 transition-all duration-300 flex flex-col"
          >
            <div className="flex flex-col items-center p-8 text-center flex-grow">
              <img
                src={club.logoUrl}
                alt={`${club.name} logo`}
                className="w-24 h-24 rounded-full object-cover border-4 border-gray-800 group-hover:scale-105 transition-transform duration-300"
              />
              <h3 className="mt-5 text-xl font-bold text-white">{club.name}</h3>
              <p className="mt-2 text-gray-400 text-sm flex-grow">{club.tagline}</p>
            </div>
            <div className="p-5 bg-gray-800/50 text-center">
                 <span className="text-indigo-400 font-semibold group-hover:text-white transition-colors">
                    View Details &rarr;
                </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AllClubs;