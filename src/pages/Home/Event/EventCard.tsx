import React from 'react';
import './EventCard.css';
import { FaCalendarAlt } from 'react-icons/fa';

interface EventCardProps {
  imgUrl: string;
  title: string;
  period: string;
}

const EventCard = ({ imgUrl, title, period }: EventCardProps) => {
  return (
    <div className="eventcard-container">
      <div>
        <img src={imgUrl} alt="Event" />
      </div>

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
