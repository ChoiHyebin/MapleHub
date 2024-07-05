import React from 'react';
import Search from './Search';
import Rank from './Rank';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Search />
      <Rank />
    </div>
  );
};

export default Home;
