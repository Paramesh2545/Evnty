import React, { useMemo, useState } from 'react';
import { Club, EventStatus, View } from '../types';
import { EVENTS } from '../constants';
import EventsSection from './EventsSection';
import SectionHeader from './SectionHeader';

interface ClubDetailProps {
  club: Club;
  onNavigate: (view: View) => void;
}

const ClubDetail: React.FC<ClubDetailProps> = ({ club, onNavigate }) => {
  const [activeTab, setActiveTab] = useState<'ongoing' | 'past'>('ongoing');

  const clubEvents = useMemo(() => {
    return EVENTS.filter(event => club.eventIds.includes(event.id));
  }, [club.eventIds]);

  const ongoingAndUpcomingEvents = clubEvents.filter(
    e => e.status === EventStatus.Ongoing || e.status === EventStatus.Upcoming
  );

  const pastEvents = clubEvents.filter(e => e.status === EventStatus.Past);

  return (
    <div className="space-y-16 py-12">
      {/* Banner and Profile */}
      <div className="bg-[#10141D] rounded-lg shadow-lg overflow-hidden">
        <img src={club.bannerUrl} alt={`${club.name} banner`} className="w-full h-48 md:h-64 object-cover opacity-50" />
        <div className="p-8 text-center -mt-24 md:-mt-32 relative">
            <img src={club.logoUrl} alt={`${club.name} logo`} className="w-32 h-32 md:w-40 md:h-40 rounded-full mx-auto mb-4 border-4 border-[#10141D] shadow-md" />
            <h1 className="text-4xl md:text-5xl font-black text-white">{club.name}</h1>
            <p className="mt-4 max-w-3xl mx-auto text-lg text-gray-400">{club.description}</p>
        </div>
      </div>
      
      {/* Events Section with Tabs */}
      <div>
        <div className="flex justify-center border-b border-gray-800 mb-8">
            <button 
                onClick={() => setActiveTab('ongoing')} 
                className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'ongoing' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Ongoing & Upcoming
            </button>
            <button 
                onClick={() => setActiveTab('past')}
                className={`px-6 py-3 font-semibold text-lg transition-colors ${activeTab === 'past' ? 'border-b-2 border-indigo-500 text-white' : 'text-gray-500 hover:text-gray-300'}`}
            >
                Past Events
            </button>
        </div>
        {activeTab === 'ongoing' && (
            <EventsSection
                title=""
                events={ongoingAndUpcomingEvents}
                onNavigate={onNavigate}
                noEventsMessage={`The ${club.name} has no upcoming or ongoing events.`}
            />
        )}
        {activeTab === 'past' && (
             <EventsSection
                title=""
                events={pastEvents}
                onNavigate={onNavigate}
                noEventsMessage={`The ${club.name} has no past events recorded.`}
            />
        )}
      </div>

      {/* Major Achievements Section */}
      {club.achievements.length > 0 && (
          <section className="bg-[#10141D] p-8 rounded-lg shadow-lg">
            <SectionHeader title="Major Achievements" />
            <ul className="list-disc list-inside space-y-3 max-w-2xl mx-auto text-gray-400">
                {club.achievements.map((ach, index) => <li key={index} className="text-lg">{ach}</li>)}
            </ul>
          </section>
      )}

      {/* Our Team Section */}
      <section>
        <SectionHeader title="Our Team" />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {club.team.map(member => (
                <div key={member.name} className="bg-[#10141D] rounded-lg shadow-md p-6 text-center transition-transform duration-300 hover:-translate-y-2">
                    <img src={member.imageUrl} alt={member.name} className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-gray-800" />
                    <h4 className="text-lg font-bold text-white">{member.name}</h4>
                    <p className="text-indigo-400">{member.position}</p>
                </div>
            ))}
        </div>
      </section>

    </div>
  );
};

export default ClubDetail;