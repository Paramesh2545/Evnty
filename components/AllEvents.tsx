import React, { useState, useMemo } from 'react';
import { EVENTS, CLUBS } from '../constants';
import { EventCategory, View } from '../types';
import EventCard from './EventCard';
import SectionHeader from './SectionHeader';

interface AllEventsProps {
    onNavigate: (view: View) => void;
}

const AllEvents: React.FC<AllEventsProps> = ({ onNavigate }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedClub, setSelectedClub] = useState('all');
  const [selectedCategory, setSelectedCategory] = useState<EventCategory | 'all'>('all');
  
  const categories: EventCategory[] = ['Technical', 'Cultural', 'Workshop', 'Sports'];

  const filteredEvents = useMemo(() => {
    return EVENTS.filter(event => {
      const matchesSearch = event.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesClub = selectedClub === 'all' || event.organizerClubId === selectedClub;
      const matchesCategory = selectedCategory === 'all' || event.category === selectedCategory;
      return matchesSearch && matchesClub && matchesCategory;
    });
  }, [searchTerm, selectedClub, selectedCategory]);

  return (
    <div className="py-12">
      <SectionHeader 
        title="All College Events"
        subtitle="Your central hub for every workshop, seminar, and competition on campus."
      />
      
      {/* Filters and Search */}
      <div className="bg-[#10141D] p-4 rounded-lg shadow-md mb-8 sticky top-24 z-40">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Search by event name..."
            className="md:col-span-2 w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedClub}
            onChange={(e) => setSelectedClub(e.target.value)}
          >
            <option value="all">All Clubs</option>
            {CLUBS.map(club => <option key={club.id} value={club.id}>{club.name}</option>)}
          </select>
          <select
            className="w-full px-4 py-3 bg-gray-800 text-white border border-gray-700 rounded-lg focus:ring-indigo-500 focus:border-indigo-500"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value as EventCategory | 'all')}
          >
            <option value="all">All Categories</option>
            {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
          </select>
        </div>
      </div>

      {/* Events List */}
      <div className="space-y-8">
        {filteredEvents.length > 0 ? (
          filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} onNavigate={onNavigate} />
          ))
        ) : (
          <div className="text-center bg-[#10141D] p-8 rounded-lg shadow-md">
            <p className="text-gray-400">No events match your criteria. Try adjusting your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllEvents;