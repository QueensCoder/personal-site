import React from 'react';
import {connect} from 'react-redux';
import {array} from 'prop-types';

// export for testing
export const Projects = props => {
  const {projs} = props;
  return (
    <div>
      <ul>{projs.map((proj, i) => <li key={i}>{proj}</li>)}</ul>
    </div>
  );
};

const mapState = state => {
  return {};
};

// export store connected to component
export default connect(mapState)(Projects);

/**
 * Prop types
 */

Projects.propTypes = {
  projs: array
};
