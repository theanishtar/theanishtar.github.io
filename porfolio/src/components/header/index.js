import React from 'react';
import { changesIcon } from './mode'
import './header.css'

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <span>
            hi@Davis
          </span>
          <span className="target">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" width="1em" height="1em">
              <path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256L73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
            </svg>
          </span>
          <span className="blink" >ˍ</span>
        </a>
      </div>
      <div className="menu">
        <ul>
          <li className="head-text"><a href="cert">Cert</a></li>
          <li><a href="cert" className="head-mb"><i className='bx bx-certification'></i></a></li>
          <li className="head-text"><a href="blog">Blog</a></li>
          <li><a href="blog" className="head-mb"><i className='bx bx-edit-alt'></i></a></li>
          <li ><span onClick={changesIcon} style={{ cursor: 'pointer' }}><i id="mode__icon" className='bx bx-sun bx-moon sun-moon'></i></span></li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
