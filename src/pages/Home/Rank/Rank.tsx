import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RankBox from './RankBox';

import './Rank.css';
import { FaAngleRight } from 'react-icons/fa6';

import Scania from '../../../assets/icons/scania.png';
import Bera from '../../../assets/icons/bera.png';
import Luna from '../../../assets/icons/luna.png';
import Zenith from '../../../assets/icons/zenith.png';
import Croa from '../../../assets/icons/croa.png';
import Union from '../../../assets/icons/union.png';
import Elysium from '../../../assets/icons/elysium.png';
import Enosis from '../../../assets/icons/enosis.png';
import Red from '../../../assets/icons/red.png';
import Aurora from '../../../assets/icons/aurora.png';
import Arcane from '../../../assets/icons/arcane.png';
import Nova from '../../../assets/icons/nova.png';
import Reboot from '../../../assets/icons/reboot.png';

const worldImages: any = {
  스카니아: Scania,
  베라: Bera,
  루나: Luna,
  제니스: Zenith,
  크로아: Croa,
  유니온: Union,
  엘리시움: Elysium,
  이노시스: Enosis,
  레드: Red,
  오로라: Aurora,
  아케인: Arcane,
  노바: Nova,
  리부트: Reboot,
  리부트2: Reboot,
};

const Rank: React.FC = () => {
  const [generalRankData, setGeneralRankData] = useState<any[]>([]);
  const [rebootRankData, setRebootRankData] = useState<any[]>([]);

  useEffect(() => {
    const fetchRankData = async () => {
      try {
        const currentDate = new Date().toISOString().slice(0, 10);
        const generalResponse = await axios.get(
          'https://open.api.nexon.com/maplestory/v1/ranking/overall',
          {
            headers: {
              'x-nxopen-api-key': import.meta.env.VITE_NEXON_API_KEY,
            },
            params: {
              date: currentDate,
              world_type: 0,
            },
          }
        );
        setGeneralRankData(generalResponse.data.ranking);

        const rebootResponse = await axios.get(
          'https://open.api.nexon.com/maplestory/v1/ranking/overall',
          {
            headers: {
              'x-nxopen-api-key': import.meta.env.VITE_NEXON_API_KEY,
            },
            params: {
              date: currentDate,
              world_type: 1,
            },
          }
        );
        setRebootRankData(rebootResponse.data.ranking);
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
        <RankBox
          title="일반 월드 랭킹"
          rankData={generalRankData.slice(0, 10)}
          worldImages={worldImages}
        />

        <RankBox
          title="리부트 월드 랭킹"
          rankData={rebootRankData.slice(0, 10)}
          worldImages={worldImages}
        />
      </div>

      <a href="">
        랭킹 더 보기 <FaAngleRight fill="#4FB6FF" />
      </a>
    </div>
  );
};

export default Rank;
