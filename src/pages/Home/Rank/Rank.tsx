import RankCard from './RankCard';

const Rank: React.FC = () => {
  return (
    <div className="rank-container">
      <h2>랭킹 TOP 10</h2>

      <div className="rank-list">
        <RankCard />
      </div>
    </div>
  );
};

export default Rank;
