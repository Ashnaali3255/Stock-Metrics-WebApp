import React from 'react';
import { useNavigate } from 'react-router-dom';
import backImage from '../images/back.png';
import micImage from '../images/mic.png';
import settingImage from '../images/setting.png';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <div className="navigation">
      <div onClick={() => navigate('/')} aria-hidden="true">
        <img
          className="btn"
          src={backImage}
          alt="back"
        />
      </div>
      <h2 className="heading">Companies</h2>
      <div className="position">
        <img className="btn" src={micImage} alt="mic" />
        <img className="btn" src={settingImage} alt="setting" />
      </div>
    </div>
  );
};

export default Navbar;
