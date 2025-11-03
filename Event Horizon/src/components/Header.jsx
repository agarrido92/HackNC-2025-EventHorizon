import React, { useState } from 'react';
import logo from '../../Assets/logo.png';
import './Header.css';

const Header = ({onCheckboxChange, searchTerm, setSearchTerm}) => {

const [isListView, setIsListView] = useState(true);

  const handleSwitchChange = (event) => {

    onCheckboxChange(event.target.checked)

  };

  return (

    <header className="header-container">

      <div className="logo-container" style={{ display: 'flex', alignItems: 'center' }}>
        <img
          src={logo}
          alt="App Logo"
          className="header-logo"
        />
        <span className="project-title" style={{ color: '#111', fontWeight: 700, fontSize: '2rem', marginLeft: '18px', letterSpacing: '1px' }}>
          EventHorizon
        </span>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search..."
          className="search-bar"
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="switch-container">
        <span className={isListView ? 'active' : ''}>Map</span>
        <label className="switch">
          <input
            type="checkbox"
            onChange={handleSwitchChange}
          />
          <span className="slider round"></span>
        </label>
        <span className={!isListView ? 'active' : ''}>List</span>
      </div>

    </header>

  );

};

export default Header;