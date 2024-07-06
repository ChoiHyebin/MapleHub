import React from 'react';

import './RankBox.css';

interface RankBoxProps {
  title: string;
  rankData: {
    date: string;
    ranking: number;
    character_name: string;
    world_name: string;
    class_name: string;
    sub_class_name: string;
    character_level: number;
    character_exp: number;
    character_popularity: number;
    character_guildname: string;
  }[];
  worldImages: any;
}

const RankBox: React.FC<RankBoxProps> = ({ title, rankData, worldImages }) => {
  return (
    <div className="rankbox-container">
      <h3>{title}</h3>

      <div>
        <p className="rank-head">순위</p>
        <p className="rank-head">이름</p>
        <p className="rank-head">레벨</p>
        <p className="rank-head">직업</p>
        <p className="rank-head">인기도</p>

        {rankData.map((rank, index) => (
          <React.Fragment key={index}>
            <p>
              <div
                className={`rank-num ${
                  rank.ranking === 1
                    ? 'rank-1'
                    : rank.ranking === 2
                      ? 'rank-2'
                      : rank.ranking === 3
                        ? 'rank-3'
                        : ''
                }`}
              >
                {rank.ranking}
              </div>
            </p>
            <p className="character-info">
              <img src={worldImages[rank.world_name]} alt={rank.world_name} />
              <p>{rank.character_name}</p>
            </p>
            <p>{rank.character_level}</p>
            <p>{rank.class_name}</p>
            <p>{rank.character_popularity}</p>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default RankBox;
