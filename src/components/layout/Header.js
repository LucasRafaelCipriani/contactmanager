import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faPlus, faQuestion } from '@fortawesome/free-solid-svg-icons';

export default function Header(props) {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
      <div className="container">
        <Link to="/" className="navbar-brand">
          {props.branding}
        </Link>
        <div>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                <FontAwesomeIcon icon={faHome} /> Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact/add" className="nav-link">
                <FontAwesomeIcon icon={faPlus} /> Add
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                <FontAwesomeIcon icon={faQuestion} /> About
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

Header.defaultProps = {
  branding: 'My App',
};

Header.propTypes = {
  branding: PropTypes.string.isRequired,
};
