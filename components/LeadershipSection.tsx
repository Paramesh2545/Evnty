import React from 'react';
import { LEADERSHIP } from '../constants';
import SectionHeader from './SectionHeader';
import { LeadershipMember } from '../types';

const LeadershipRow: React.FC<{ member: LeadershipMember, reverse: boolean }> = ({ member, reverse }) => (
    <div className={`flex flex-col md:flex-row items-center gap-12 ${reverse ? 'md:flex-row-reverse' : ''}`}>
        <div className="md:w-1/2 relative">
            <div className="absolute -inset-2 bg-gray-800 rounded-lg transform rotate-2"></div>
            <img 
                className="w-full h-full object-cover rounded-lg shadow-lg relative" 
                src={member.imageUrl} 
                alt={member.name} 
            />
        </div>
        <div className="md:w-1/2 text-left">
            <p className="text-indigo-400 font-semibold">Meet Our Leadership</p>
            <h3 className="text-4xl font-black text-white mt-2">{member.name}</h3>
            <p className="text-xl font-bold text-gray-300 mt-1">{member.title}</p>
            <blockquote className="mt-6 pl-4 border-l-4 border-gray-700">
                <p className="text-lg text-gray-400 italic">
                    "{member.quote}"
                </p>
            </blockquote>
             <button className="mt-8 bg-white text-gray-900 font-bold py-3 px-6 rounded-lg hover:bg-gray-300 transition-colors duration-300 flex items-center space-x-2">
                <span>See More</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
            </button>
        </div>
    </div>
);


const LeadershipSection: React.FC = () => {
  return (
    <section className="py-20 bg-[#10141D] rounded-xl">
      <div className="space-y-24">
        {LEADERSHIP.map((member, index) => (
          <LeadershipRow key={member.id} member={member} reverse={index % 2 !== 0} />
        ))}
      </div>
    </section>
  );
};

export default LeadershipSection;