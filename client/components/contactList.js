import React from 'react';
import {connect} from 'react-redux';

export const ContactList = props => {
  return <div>contact list</div>;
};

const mapState = state => ({contacts: state.contacts});

export default connect(mapState)(ContactList);
