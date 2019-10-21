import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {logout} from '../store';

export const Navbar = ({handleClick, isLoggedIn}) => (
  <div>
    <nav className="navbar">
      <h4>Ozal Khan</h4>
      {isLoggedIn ? (
        <div>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </div>
      ) : (
        <div>
          {/* The navbar will show these links before you log in */}
          <Link className="nav__link" to="/login">
            Login
          </Link>
          <Link className="nav__link" to="/signup">
            Sign Up
          </Link>
        </div>
      )}
      <ul>
        <li>projects</li>
        <li>resume</li>
        <li>about</li>
        <li>blog</li>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    }
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
