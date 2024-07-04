import { useState } from 'react';
import background from '../../assets/images/background2.png';
import logo from '../../assets/images/logo.png';
import apiLogo from '../../assets/icons/footer_api.svg';

import './Footer.css';

import { RiDiscordLine, RiDiscordFill, RiKakaoTalkLine, RiKakaoTalkFill } from 'react-icons/ri';
import { HiOutlineMail, HiMail } from 'react-icons/hi';

const Footer = () => {
  const [activeIcon, setActiveIcon] = useState<string | null>(null);

  const handleIconHover = (icon: string) => {
    setActiveIcon(icon);
  };

  const handleIconLeave = () => {
    setActiveIcon(null);
  };

  return (
    <footer style={{ backgroundColor: '#F5EBEB' }}>
      <img
        src={background}
        style={{
          width: '100%',
          aspectRatio: '3/1',
          objectFit: 'cover',
          filter: 'contrast(50%)',
        }}
      />

      <div className="footer">
        <div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img src={logo} width={'300px'} />
            <p>&copy; 2024 all rights reserved</p>
          </div>
          <p>
            Data is based on <img src={apiLogo} alt="" />
            <br />
            This site is not an official site of NEXON and does not provide any warranty
          </p>
        </div>

        <ul className="footer-icons">
          <li
            onMouseEnter={() => handleIconHover('discord')}
            onMouseLeave={handleIconLeave}
            className="footer-icon"
          >
            <a href="">
              {activeIcon === 'discord' ? (
                <RiDiscordFill fill="#FF5C8F" />
              ) : (
                <RiDiscordLine fill="#FF5C8F" />
              )}
            </a>
          </li>
          <li
            onMouseEnter={() => handleIconHover('kakao')}
            onMouseLeave={handleIconLeave}
            className="footer-icon"
          >
            <a href="">
              {activeIcon === 'kakao' ? (
                <RiKakaoTalkFill fill="#FF5C8F" />
              ) : (
                <RiKakaoTalkLine fill="#FF5C8F" />
              )}
            </a>
          </li>
          <li
            onMouseEnter={() => handleIconHover('mail')}
            onMouseLeave={handleIconLeave}
            className="footer-icon"
          >
            <a href="">
              {activeIcon === 'mail' ? (
                <HiMail fill="#FF5C8F" />
              ) : (
                <HiOutlineMail stroke="#FF5C8F" />
              )}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
