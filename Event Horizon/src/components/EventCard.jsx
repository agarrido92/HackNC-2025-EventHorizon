import React from 'react';
import './EventCard.css';

const EventCard = ({ event }) => {
  if (!event) return null;
  return (
    <div className="event-card">
        <img className="event-card-image" src={event.imageUrl} alt={event.name} />
        <div className="event-card-content">
            <h2 className="event-card-title">{event.name}</h2>
            <p className="event-card-date">{event.date} at {event.time}</p>
            <p className="event-card-location">{event.location}</p>
            <p className="event-card-description">{event.description}</p>
        </div>
    </div>
    // <div className="event-card">
    //   <img src={event.imageUrl} alt={event.name} style={{ width: '100%', height: 'auto' }} />
    //   <h2>{event.name}</h2>
    //   <p>{event.date} at {event.time}</p>
    //   <p>{event.location}</p>
    //   <p>{event.description}</p>
    // </div>
  );
};

export default EventCard;