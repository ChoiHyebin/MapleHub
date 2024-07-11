import React from 'react';

import { FaRegClock } from 'react-icons/fa6';

import './Character.css';

const Character: React.FC = () => {
  return (
    <div className="char-container">
      <div className="char-img">
        <img src="" alt="" />
      </div>

      <div className="char-card">
        <p className="char-flex char-recent">
          <FaRegClock />
          최근 활동일:
        </p>

        <div>
          <div className="char-flex">
            <b className="char-name">캐릭터명</b>
            <p className="char-world">월드명</p>
          </div>

          <div className="char-flex">
            <b>캐릭터 직업</b>
            <p>|</p>
            <p>
              <b>캐릭터 레벨</b> Level
            </p>
            <p>|</p>
            <p>
              인기도 <b>캐릭터 인기도</b>
            </p>
          </div>

          <p>
            길드 <b>길드명</b>
          </p>

          <p>
            유니온 <b>유니온 점수</b>
          </p>

          <div className="char-flex">
            <p>
              종합 <b>종합 랭킹</b>위
            </p>
            <p>|</p>
            <p>
              월드 <b>월드 랭킹</b>위
            </p>
          </div>

          <p>
            전투력 <b>전투력</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Character;
