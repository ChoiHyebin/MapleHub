import RankCard from './RankCard';

import './Rank.css';

import { FaAngleRight } from 'react-icons/fa6';

const Rank: React.FC = () => {
  return (
    <div className="rank-container">
      <h2>랭킹 TOP 10</h2>

      <div className="rank-list">
        <RankCard />
      </div>

      <a href="">
        랭킹 더 보기 <FaAngleRight fill="#4FB6FF" />
      </a>
    </div>
  );
};

export default Rank;
