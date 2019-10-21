/* global describe beforeEach it */
import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {Navbar} from '..';
const adapter = new Adapter();
enzyme.configure({adapter});

describe('Navbar', () => {
  let navbar;

  beforeEach(() => {
    navbar = shallow(<Navbar />);
  });

  it('renders the nav bar with project, about, and contact sections', () => {
    expect(navbar.find('ul').children()).to.have.lengthOf(5);
  });
});
