import logo from '../../assets/images/logo.png';

const Header = () => {
  const headerStyle = {
    padding: '30px 150px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    fontWeight: 'bold',
  };

  const navStyle = {
    display: 'flex',
    gap: '50px',
  };

  const contactBtn = {
    backgroundColor: '#4FB6FF',
    color: 'white',
    padding: '10px',
    borderRadius: '30px',
  };

  return (
    <header style={headerStyle}>
      <a href="/">
        <img src={logo} style={{ width: '200px' }} />
      </a>

      <ul style={navStyle}>
        <li>
          <a href="">홈</a>
        </li>
        <li>
          <a href="">랭킹</a>
        </li>
        <li>
          <a href="">소식</a>
        </li>
        <li>
          <a href="" style={contactBtn}>
            Contact Me
          </a>
        </li>
      </ul>
    </header>
  );
};

export default Header;
