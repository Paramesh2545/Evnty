import React from 'react';
import { Event, EventStatus, View } from '../types';

const statusStyles: { [key in EventStatus]: string } = {
  [EventStatus.Upcoming]: 'bg-green-500/10 text-green-400',
  [EventStatus.Ongoing]: 'bg-blue-500/10 text-blue-400 animate-pulse',
  [EventStatus.Past]: 'bg-gray-500/10 text-gray-400',
};

const categoryStyles: { [key: string]: string } = {
  'Technical': 'bg-indigo-500/10 text-indigo-400',
  'Cultural': 'bg-pink-500/10 text-pink-400',
  'Workshop': 'bg-yellow-500/10 text-yellow-400',
  'Sports': 'bg-purple-500/10 text-purple-400'
}

interface EventCardProps {
    event: Event;
    onNavigate: (view: View) => void;
}

const EventCard: React.FC<EventCardProps> = ({ event, onNavigate }) => {
  return (
    <div className="bg-[#10141D] rounded-xl shadow-lg overflow-hidden flex flex-col md:flex-row transition-all duration-300 hover:shadow-indigo-500/20 hover:scale-[1.02]">
      <img className="h-56 w-full object-cover md:h-auto md:w-48" src={event.imageUrl} alt={event.name} />
      <div className="p-6 flex flex-col justify-between flex-1">
        <div>
            <div className="flex justify-between items-start flex-wrap gap-2">
                 <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-medium ${categoryStyles[event.category]} flex-shrink-0`}>
                    {event.category}
                </span>
                <span className={`inline-flex items-center px-2 py-1 rounded text-xs font-semibold ${statusStyles[event.status]} flex-shrink-0`}>
                    {event.status}
                </span>
            </div>
            <h3 className="text-xl font-bold text-white leading-tight mt-3">{event.name}</h3>
            <p className="mt-2 text-gray-400 text-sm line-clamp-2">{event.description}</p>
        </div>
        <div className="mt-6 flex flex-col sm:flex-row sm:items-center justify-between">
            <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                    <span>{event.date} at {event.time}</span>
                </div>
                <div className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                    <span>{event.location}</span>
                </div>
            </div>
            <button
              onClick={() => onNavigate({ type: 'event-detail', eventId: event.id })}
              className="mt-4 sm:mt-0 bg-indigo-600 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-700 transition-colors duration-300 flex items-center group"
            >
              Learn More
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2 transform group-hover:translate-x-1 transition-transform" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;