import React from 'react';

import './EventCard.css';

import { FaCalendarAlt } from 'react-icons/fa';

const EventCard = () => {
  return (
    <div className="eventcard-container">
      <div>이벤트 이미지</div>

      <div>
        <h3>이벤트 이름</h3>
        <p>
          <FaCalendarAlt />
          이벤트 기간
        </p>
      </div>
    </div>
  );
};

export default EventCard;
