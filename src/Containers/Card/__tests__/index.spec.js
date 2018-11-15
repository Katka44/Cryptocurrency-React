import React from 'react';
import { shallow } from 'enzyme';
import Card from '../index';
import CardLayout from '../../../Components/Layouts/CardLayout';
import CardContent from '../../../Components/CardContent';

describe('Card component', () => {
  const props = () => ({
    data: {},
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Card {...props()}/>);
  });
  it('should render CardLayout', () => {
    expect(wrapper.find(CardLayout)).toHaveLength(1);
  });
  it('should render CardContent', () => {
    expect(wrapper.dive().find(CardContent)).toHaveLength(1);
  });
  /*
  it('should have a method updateCoords', () => {
    expect(wrapper.instance().updateCoords()).toEqual(true);
  });
  */
});
