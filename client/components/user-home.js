import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

/**
 * COMPONENT
 */

//  export component without store connection in order to test the component
export const UserHome = props => {
  const {email} = props;

  return (
    <div>
      <h3>Welcome Home</h3>
    </div>
  );
};

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    email: state.user.email
  };
};

export default connect(mapState)(UserHome);

/**
 * PROP TYPES
 */
UserHome.propTypes = {
  email: PropTypes.string
};
