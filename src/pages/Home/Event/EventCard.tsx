import React from 'react';
import './EventCard.css';
import { FaCalendarAlt } from 'react-icons/fa';

interface EventCardProps {
  imgUrl: string;
  title: string;
  period: string;
  eventUrl: string;
}

const EventCard = ({ imgUrl, title, period, eventUrl }: EventCardProps) => {
  return (
    <div className="eventcard-container">
      <a href={eventUrl}>
        <img src={imgUrl} alt="Event" />
      </a>

      <div>
        <h3>{title}</h3>
        <p>
          <FaCalendarAlt />
          {period}
        </p>
      </div>
    </div>
  );
};

export default EventCard;
