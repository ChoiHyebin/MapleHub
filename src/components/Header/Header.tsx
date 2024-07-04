import logo from '../../assets/images/logo.png';
import './Header.css';
import { IoMenu, IoCall, IoClose } from 'react-icons/io5';
import { useState } from 'react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <a href="/">
        <img src={logo} />
      </a>

      <nav className="header-nav">
        <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a href="">홈</a>
          </li>
          <li>
            <a href="">랭킹</a>
          </li>
          <li>
            <a href="">소식</a>
          </li>
        </ul>

        {/* <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? <IoClose fill="white" /> : <IoMenu stroke="white" />}
        </button>

        <a href="" className="header-contact">
          Contact Me
        </a>
        {isMenuOpen ? (
          <></>
        ) : (
          <a href="" className="header-contact-mini">
            <IoCall fill="white" />
          </a>
        )} */}

        <button
          className={`menu-toggle ${isMenuOpen ? 'menu-toggle-clicked' : ''}`}
          onClick={toggleMenu}
        >
          {isMenuOpen ? <IoClose fill="white" /> : <IoMenu stroke="white" />}
        </button>

        <a href="" className="header-contact">
          Contact Me
        </a>
        <a href="" className="header-contact-mini" style={{ opacity: isMenuOpen ? '0' : '1' }}>
          <IoCall fill="white" />
        </a>
      </nav>
    </header>
  );
};

export default Header;
