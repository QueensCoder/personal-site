import axios from 'axios';

//initial state
const initalState = [];

//get all contacts puts contacts into the store
const GET_ALL_CONTACTS = 'GET_ALL_CONTACTS';
const CREATE_CONTACT = 'CREATE_CONTACT';

const getContacts = contacts => ({
  type: GET_ALL_CONTACTS,
  contacts
});

export const fetchContacts = () => {
  return async function thunk(dispatch) {
    try {
      //axios does not require the whole end point
      const {data} = await axios.get('/api/contact');
      dispatch(getContacts(data));
    } catch (err) {
      console.log(err);
    }
  };
};

export const createContact = contact => {
  return async function thunk(dispatch) {
    try {
      const {data} = axios.post('/api/contact', contact);
    } catch (err) {
      console.log(err);
    }
  };
};

export default function(state = initalState, action) {
  const {contacts, type} = action;
  switch (type) {
    case GET_ALL_CONTACTS:
      return contacts;
    default:
      return state;
  }
}
