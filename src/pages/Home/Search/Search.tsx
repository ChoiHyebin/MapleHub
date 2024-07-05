import './Search.css';

import { IoSearch } from 'react-icons/io5';

const Search: React.FC = () => {
  return (
    <div className="search-container">
      <form>
        <label htmlFor="search-input">캐릭터를 검색해 보세요.</label>

        <div>
          <input type="text" placeholder="캐릭터 이름을 입력하세요." className="search-input" />
          <button type="submit">
            <IoSearch fill="white" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Search;
