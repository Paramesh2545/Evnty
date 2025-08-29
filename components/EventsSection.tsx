
import React from 'react';
import { Event, View } from '../types';
import EventCard from './EventCard';
import SectionHeader from './SectionHeader';

interface EventsSectionProps {
  title: string;
  subtitle?: string;
  events: Event[];
  noEventsMessage?: string;
  onNavigate: (view: View) => void;
}

const EventsSection: React.FC<EventsSectionProps> = ({ title, subtitle, events, onNavigate, noEventsMessage = "No events to display." }) => {
  if (events.length === 0) {
    return (
      <div className="py-8">
        <SectionHeader title={title} subtitle={subtitle} />
        <div className="text-center bg-white p-8 rounded-lg shadow-md">
            <p className="text-gray-500">{noEventsMessage}</p>
        </div>
      </div>
    );
  }

  return (
    <section className="py-8">
      {title && <SectionHeader title={title} subtitle={subtitle} />}
      <div className="space-y-8">
        {events.map((event) => (
          <EventCard key={event.id} event={event} onNavigate={onNavigate}/>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
