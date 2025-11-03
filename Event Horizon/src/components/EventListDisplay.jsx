import React from 'react';
import events from './EventList';
import EventCard from './EventCard';

const EventListDisplay = ({ searchTerm }) => {
  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    event.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="event-list-container">
        {filteredEvents.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default EventListDisplay;