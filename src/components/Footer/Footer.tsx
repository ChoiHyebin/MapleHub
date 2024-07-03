import { useState } from 'react';
import background from '../../assets/images/background2.png';
import logo from '../../assets/images/logo.png';

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

      <div
        style={{
          padding: '30px 150px',
          display: 'flex',
          flexDirection: 'column',
          gap: '50px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <img src={logo} width={'300px'} />
            <p>&copy; 2024 all rights reserved</p>
          </div>
          <p style={{ textAlign: 'right' }}>
            Data is based on Nexon NexonAPI
            <br />
            This site is not an official site of NEXON and does not provide any warranty
          </p>
        </div>

        <ul
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '200px' }}
        >
          <li
            onMouseEnter={() => handleIconHover('discord')}
            onMouseLeave={handleIconLeave}
            className="footer-icon"
          >
            <a href="">
              {activeIcon === 'discord' ? (
                <RiDiscordFill size={50} fill="#FF5C8F" />
              ) : (
                <RiDiscordLine size={50} fill="#FF5C8F" />
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
                <RiKakaoTalkFill size={50} fill="#FF5C8F" />
              ) : (
                <RiKakaoTalkLine size={50} fill="#FF5C8F" />
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
                <HiMail size={50} fill="#FF5C8F" />
              ) : (
                <HiOutlineMail size={50} stroke="#FF5C8F" />
              )}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
