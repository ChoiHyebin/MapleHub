import './EventCard.css';
import { CiCalendar } from 'react-icons/ci';

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

        <div>
          <h3>{title}</h3>
          <p>
            <CiCalendar className="calendar-icon" />
            {period}
          </p>
        </div>
      </a>
    </div>
  );
};

export default EventCard;
