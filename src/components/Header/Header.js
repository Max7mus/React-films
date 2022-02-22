import React from 'react';
import { NavLink } from 'react-router-dom';
import Top from '../../routes/Top';
import './Header.css';

const Menu = [
  {
    path: '/',
    label: 'Home',
  },
  {
    path: '/about',
    label: 'About',
  },
  {
    path: '/top',
    label: 'Top',
  },
  {
    path: '/comedy',
    label: 'Comedy',
  },
];

function Header() {
  return (
    <header
      className="head"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1574267432644-f410f8ec2474?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1931&q=80")`,
      }}
    >
      <nav className="navigation">
        <div className="logo">
          <a
            className="logotype"
            onClick={(e) => {
              e.preventDefault();
              window.scroll(0, 0);
            }}
          >
            KinoLux
          </a>
        </div>
        <ul className="nav-list">
          {Menu.map((item, index) => (
            <li className="list-item" key={index}>
              <NavLink to={item.path}>{item.label}</NavLink>
            </li>
          ))}
          <form>
            <input
              type="search"
              placeholder="Search films"
              className="search"
            />
          </form>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
