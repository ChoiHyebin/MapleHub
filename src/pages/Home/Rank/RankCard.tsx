import './RankCard.css';

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

interface RankCardProps {
  rank: number;
  characterName: string;
  characterClass: string;
  characterLevel: number;
  worldName: string;
}

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
};

const RankCard: React.FC<RankCardProps> = ({
  rank,
  characterName,
  characterClass,
  characterLevel,
  worldName,
}) => {
  const worldImage = worldImages[worldName] || null;

  return (
    <div className="rankcard-container">
      {/* <p>{worldName}</p> */}
      {worldImage ? <img src={worldImage} className="world-img" /> : <p>{worldName}</p>}

      <div>
        <p>캐릭터 이미지</p>

        <div className="rankcard-info">
          <p>
            <b>{characterName}</b>
            <br />
            <span>{characterClass}</span>
          </p>

          <p>
            <b>{characterLevel}</b>
            <br />
            <span>Level</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RankCard;
