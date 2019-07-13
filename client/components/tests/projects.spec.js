import {expect} from 'chai';
import React from 'react';
import enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Projects from '../projects';

const adap = new Adapter();
enzyme.configure({adap});

describe('Projects', () => {
  let projects;

  beforeEach(() => {
    projects = shallow(<Projects projs={['str1', 'str2']} />);
  });

  it('renders a list of projects in li tags', () => {
    expect(projects.find('ul').children()).to.have.lengthOf(2);
  });

  it('displays the correct text for each list item', () => {
    expect(
      projects
        .find('ul')
        .childAt(0)
        .type()
    ).to.equal('li');

    expect(
      projects
        .find('ul')
        .childAt(1)
        .type()
    ).to.equal('li');
  });

  //   it('has a list of children with the correct strings', () => {
  //     expect(projects.find('ul').children()).forEach(node => {
  //       node.type().to.equal('li');
  //     });
  //   });
});
