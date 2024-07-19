import { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import logo from '../assets/logo.png';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <div className="header-container">
        <img src={logo} alt="logo" className="w-32" />
        <ul className={`fixed top-0 left-0 h-full text-black md:text-primary-text transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out flex flex-col md:items-center md:justify-center bg-white md:gap-6 space-y-6 p-8 md:p-0 md:static md:flex-row md:space-y-0 md:space-x-4 md:transform-none md:bg-transparent md:h-auto font-semibold z-50`}>
          <li><a href="https://taikonz.io/p2p">P2P</a></li>
          <li><a href="https://taikonz.io/trade/BTC_USDT">Trade</a></li>
          <li><a href="https://taikonz.io/Stakehome">Staking</a></li>
          <li><a href="https://taikonz.io/launchpadlistnew">Launchpad</a></li>
          <li><button className="primary_header_button">Login</button></li>
          <li><button className="secondary_header_button">Register</button></li>
        </ul>
        <div className="md:hidden" onClick={toggleMenu}>
          <FaBars className="text-2xl cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
