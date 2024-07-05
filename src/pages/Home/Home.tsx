import React from 'react';
import Search from './Search/Search';
import Rank from './Rank/Rank';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Search />
      <Rank />
    </div>
  );
};

export default Home;
