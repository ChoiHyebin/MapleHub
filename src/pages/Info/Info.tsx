import React from 'react';
import Character from './Character';

import { FaAngleLeft } from 'react-icons/fa6';

import './Info.css';

const Info: React.FC = () => {
  return (
    <div className="info-container">
      <a href="/">
        <FaAngleLeft />
        홈으로
      </a>

      <div>
        <Character />
      </div>
    </div>
  );
};

export default Info;
