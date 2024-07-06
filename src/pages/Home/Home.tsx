import React from 'react';
import Search from './Search/Search';
import Rank from './Rank/Rank';
import Event from './Event/Event';

const Home: React.FC = () => {
  return (
    <div className="home-container">
      <Search />
      <Rank />
      <Event />
    </div>
  );
};

export default Home;
