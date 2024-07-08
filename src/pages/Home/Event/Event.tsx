import React, { useState, useEffect } from 'react';
import EventCard from './EventCard';
import './Event.css';
import { FaAngleRight } from 'react-icons/fa6';

interface EventData {
  imgUrl: string;
  title: string;
  period: string;
  eventUrl: string;
}

const Event: React.FC = () => {
  const [events, setEvents] = useState<EventData[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch('http://localhost:3001/events');
        const data = await response.json();
        setEvents(data);
      } catch (error) {
        console.error('이벤트 정보 호출 오류:', error);
      }
    };
    fetchEvents();
  }, []);

  return (
    <div className="event-container">
      <h2>게임 소식</h2>

      <div className="event-list">
        {events.map((event, index) => (
          <EventCard
            key={index}
            imgUrl={event.imgUrl}
            title={event.title}
            period={event.period}
            eventUrl={event.eventUrl}
          />
        ))}
      </div>

      <a href="">
        랭킹 더 보기 <FaAngleRight fill="#4FB6FF" />
      </a>
    </div>
  );
};

export default Event;
