import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './Header.scss';

class Header extends React.Component {
  render() {
    return (
      <ul className="g-nav">
        <li>
          <Link className={classNames('alink', { active: location.pathname === '/' })} to="/">
            Home
          </Link>
        </li>
        <li>
          <Link
            className={classNames('alink', { active: location.pathname === '/docs' })}
            to="/docs"
          >
            Docs
          </Link>
        </li>
        <li>
          <Link
            className={classNames('alink', { active: location.pathname === '/about' })}
            to="/about"
          >
            About
          </Link>
        </li>
      </ul>
    );
  }
}

export default Header;
