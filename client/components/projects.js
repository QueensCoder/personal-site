import React from 'react';
import {array} from 'prop-types';

const Project = props => {
  const {projs} = props;
  return (
    <div>
      <ul>{projs.map((proj, i) => <li key={i}>{proj}</li>)}</ul>
    </div>
  );
};

export default Project;

/**
 * Prop types
 */

Project.propTypes = {
  projs: array
};
