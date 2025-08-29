import React from 'react';
import { Event, View, EventStatus } from '../types';
import { CLUBS } from '../constants';

interface EventDetailProps {
  event: Event;
  onNavigate: (view: View) => void;
}

const statusStyles: { [key in EventStatus]: string } = {
  [EventStatus.Upcoming]: 'bg-green-500/10 text-green-400',
  [EventStatus.Ongoing]: 'bg-blue-500/10 text-blue-400',
  [EventStatus.Past]: 'bg-gray-500/10 text-gray-400',
};

const EventDetail: React.FC<EventDetailProps> = ({ event, onNavigate }) => {
    const organizerClub = CLUBS.find(c => c.id === event.organizerClubId);

    const handleRegistration = (e: React.FormEvent) => {
        e.preventDefault();
        if(event.registrationFee && event.registrationFee > 0) {
            alert(`Registration submitted! You will be redirected to a secure payment gateway to pay the fee of $${event.registrationFee}.`);
        } else {
            alert('Registration successful! You will receive a confirmation email shortly.');
        }
    }

  return (
    <div className="bg-[#10141D] rounded-lg shadow-xl overflow-hidden my-12">
      <div className="relative">
        <img className="h-80 w-full object-cover" src={event.imageUrl} alt={event.name} />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      <div className="p-8 md:p-12">
        <div className="relative -mt-24">
            <div className="flex justify-between items-start flex-wrap gap-4">
                <div>
                     <h1 className="text-4xl md:text-5xl font-black text-white">{event.name}</h1>
                     {organizerClub && (
                        <button 
                            onClick={() => onNavigate({type: 'club', clubId: organizerClub.id})}
                            className="text-lg text-indigo-400 hover:underline mt-1"
                        >
                            Organized by {organizerClub.name}
                        </button>
                     )}
                </div>
                <span className={`inline-flex items-center px-4 py-2 rounded-full text-md font-semibold ${statusStyles[event.status]} flex-shrink-0`}>
                    {event.status}
                </span>
            </div>
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300 border-y border-gray-800 py-6">
            <div className="flex items-start">
                <svg className="h-6 w-6 mr-3 text-indigo-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                <div><strong>Date & Time:</strong> {event.date} at {event.time}</div>
            </div>
            <div className="flex items-start">
                 <svg className="h-6 w-6 mr-3 text-indigo-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <div><strong>Venue:</strong> {event.location}</div>
            </div>
             <div className="flex items-start">
                <svg className="h-6 w-6 mr-3 text-indigo-400 flex-shrink-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <div><strong>Fee:</strong> {event.registrationFee && event.registrationFee > 0 ? `$${event.registrationFee}` : 'Free'}</div>
            </div>
        </div>

        <div className="mt-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold text-white">About the Event</h2>
                    <p className="mt-4 text-gray-400 whitespace-pre-wrap">{event.description}</p>
                    
                    {event.rules.length > 0 && <>
                        <h3 className="text-xl font-bold text-white mt-6">Rules & Prerequisites</h3>
                        <ul className="mt-4 list-disc list-inside space-y-2 text-gray-400">
                           {event.rules.map((rule, i) => <li key={i}>{rule}</li>)}
                        </ul>
                    </>}

                    {event.coordinators.length > 0 && <>
                        <h3 className="text-xl font-bold text-white mt-6">Event Coordinators</h3>
                         <div className="mt-4 text-gray-400">
                           {event.coordinators.map((c, i) => <p key={i}>{c.name} - <a href={`mailto:${c.contact}`} className="text-indigo-400 hover:underline">{c.contact}</a></p>)}
                        </div>
                    </>}
                </div>

                {/* Registration Form */}
                {event.status !== EventStatus.Past && (
                <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-800">
                    <h2 className="text-2xl font-bold text-white text-center">Register Now</h2>
                    <form className="mt-6 space-y-4" onSubmit={handleRegistration}>
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-400">Full Name</label>
                            <input type="text" id="name" required className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                         <div>
                            <label htmlFor="collegeId" className="block text-sm font-medium text-gray-400">College ID</label>
                            <input type="text" id="collegeId" required className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                         <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-400">Email Address</label>
                            <input type="email" id="email" required className="mt-1 block w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500" />
                        </div>
                        <button type="submit" className="w-full bg-indigo-600 text-white font-bold py-3 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-300">
                            Submit Registration
                        </button>
                    </form>
                </div>
                )}
            </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetail;