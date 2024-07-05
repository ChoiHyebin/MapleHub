import React from 'react';
import axios from 'axios';
import RankCard from './RankCard';
import './Rank.css';
import { FaAngleRight } from 'react-icons/fa6';

const Rank: React.FC = () => {
  const [rankData, setRankData] = React.useState<any[]>([]);

  React.useEffect(() => {
    const fetchRankData = async () => {
      try {
        const currentDate = new Date().toISOString().slice(0, 10);
        const response = await axios.get(
          'https://open.api.nexon.com/maplestory/v1/ranking/overall',
          {
            headers: {
              'x-nxopen-api-key': import.meta.env.VITE_NEXON_API_KEY,
            },
            params: {
              date: currentDate,
            },
          }
        );

        setRankData(response.data.ranking);
      } catch (error) {
        console.error('랭킹 조회 API 호출 실패:', error);
      }
    };

    fetchRankData();
  }, []);

  return (
    <div className="rank-container">
      <h2>랭킹 TOP 10</h2>

      <div className="rank-list">
        {rankData.slice(0, 10).map((rank, index) => (
          <div key={index}>
            <RankCard
              rank={rank.ranking}
              characterName={rank.character_name}
              characterClass={rank.class_name}
              characterLevel={rank.character_level}
              worldName={rank.world_name}
            />
          </div>
        ))}
      </div>

      <a href="">
        랭킹 더 보기 <FaAngleRight fill="#4FB6FF" />
      </a>
    </div>
  );
};

export default Rank;
