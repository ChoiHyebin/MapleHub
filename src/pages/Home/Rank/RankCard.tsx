import './RankCard.css';

const RankCard: React.FC = () => {
  return (
    <div className="rankcard-container">
      <p>서버</p>

      <div>
        <p>캐릭터 이미지</p>

        <div>
          <p>
            <b>캐릭터 이름</b>
            <br />
            <span>캐릭터 직업</span>
          </p>

          <p>
            <b>캐릭터 레벨</b>
            <br />
            <span>Level</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
