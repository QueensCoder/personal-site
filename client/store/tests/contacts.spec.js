/* global describe beforeEach afterEach it */

import {expect} from 'chai';
import {fetchContacts, createContact} from '../';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import configureMockStore from 'redux-mock-store';
import thunkMiddleware from 'redux-thunk';

//configure a mock store with thunkMiddleware
const middlewares = [thunkMiddleware];
const mockStore = configureMockStore(middlewares);

describe('thunk creators', () => {
  let store;
  let mockAxios;

  const initialState = {contacts: []};

  // create a mock store for testing
  //uses the initial state in the mock store
  beforeEach(() => {
    mockAxios = new MockAdapter(axios);
    store = mockStore(initialState);
  });

  // after each test restore the adapter aka remove mocking behavior
  // then clear all actions from the store
  afterEach(() => {
    mockAxios.restore();
    store.clearActions();
  });

  describe('fetch contacts', () => {
    it('fetchContacts: eventually dispatches the GET_ALL_CONTACTS action', async () => {
      const fakeContacts = [{email: 'ozal', message: 'hello'}];

      //mock axios returns the payload when /api/contact is hit and dispatches
      //the payload to the mockstore
      mockAxios.onGet('/api/contact').reply(200, fakeContacts);
      await store.dispatch(fetchContacts());

      // then the actions are examined to make sure the correct action
      // and the correct payload is recieved to the mock store
      const actions = store.getActions();
      expect(actions[0].type).to.be.equal('GET_ALL_CONTACTS');
      expect(actions[0].contacts).to.be.deep.equal(fakeContacts);
    });
  });

  // describe('post contacts', () => {
  //   it('postContacts: eventually dispatches the CREATE CONTACT action', async () => {
  //     const fakeContact = {email: 'ozal', message: 'hello'};
  //     mockAxios.onPost('/api/contact').reply(201, fakeContact);
  //     await store.dispatch(createContact(fakeContact));

  //     const actions = store.getActions();

  //   });
  // });
});
