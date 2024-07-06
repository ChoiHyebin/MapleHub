import React from 'react';

import EventCard from './EventCard';
import './Event.css';

import { FaAngleRight } from 'react-icons/fa6';

const Event = () => {
  return (
    <div className="event-container">
      <h2>게임 소식</h2>

      <div className="event-list">
        <EventCard />
      </div>

      <a href="">
        랭킹 더 보기 <FaAngleRight fill="#4FB6FF" />
      </a>
    </div>
  );
};

export default Event;
