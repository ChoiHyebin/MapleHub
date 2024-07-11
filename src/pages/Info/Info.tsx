import React from 'react';
import Character from './Character';

import { FaAngleLeft } from 'react-icons/fa6';

import './Info.css';

const Info: React.FC = () => {
  return (
    <div className="info-container">
      <p>
        <a href="/">
          <FaAngleLeft />
          홈으로
        </a>
      </p>

      <div>
        <Character />
      </div>
    </div>
  );
};

export default Info;
