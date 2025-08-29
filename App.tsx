import React, { useState, useCallback } from 'react';
import { View, Club, Event } from './types';
import { CLUBS, EVENTS } from './constants';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import AllEvents from './components/AllEvents';
import ClubDetail from './components/ClubDetail';
import AllClubs from './components/AllClubs';
import EventDetail from './components/EventDetail';
import ExternalEvents from './components/ExternalEvents';

const App: React.FC = () => {
  const [view, setView] = useState<View>({ type: 'home' });

  const handleNavigate = useCallback((newView: View) => {
    setView(newView);
    window.scrollTo(0, 0); // Scroll to top on every navigation
  }, []);

  const renderContent = useCallback(() => {
    switch (view.type) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'all-clubs':
        return <AllClubs onNavigate={handleNavigate} />;
      case 'all-events':
        return <AllEvents onNavigate={handleNavigate} />;
      case 'external-events':
        return <ExternalEvents />;
      case 'club':
        const club = CLUBS.find(c => c.id === view.clubId);
        // Fallback to all clubs if club not found
        return club ? <ClubDetail club={club} onNavigate={handleNavigate} /> : <AllClubs onNavigate={handleNavigate} />;
      case 'event-detail':
         const event = EVENTS.find(e => e.id === view.eventId);
         // Fallback to all events if event not found
         return event ? <EventDetail event={event} onNavigate={handleNavigate} /> : <AllEvents onNavigate={handleNavigate} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  }, [view]);

  return (
    <div className="bg-[#0D1117] min-h-screen flex flex-col font-sans text-gray-300">
      <Header onNavigate={handleNavigate} />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="animate-fadeIn">
          {renderContent()}
        </div>
      </main>
      <Footer onNavigate={handleNavigate}/>
    </div>
  );
};

export default App;