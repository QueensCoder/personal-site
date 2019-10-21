import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import sinon from 'sinon';
import {Resume} from '../';

// todo instill sinon for spy on button testing
// ensure pdf can be downloaded upon click

const adapt = new Adapter();
enzyme.configure({adapt});

describe('Resume', () => {
  let resume;
  const onButtonClick = sinon.spy();

  beforeEach(() => {
    resume = shallow(<Resume onButtonClick={onButtonClick} />);
  });

  it('has a button that allows the user to download the pdf', () => {
    expect(resume.find('button')).to.have.length(1);
  });

  it('it simulates click events', () => {
    //simulate click causes button to actually be clicked and the app to fail
    //pass button in as prop maybe
    resume.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });
});
