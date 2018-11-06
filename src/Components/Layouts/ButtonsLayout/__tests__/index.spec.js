/* eslint-disable react/display-name */
import React from 'react';
import { shallow } from 'enzyme';
import ButtonsLayout from '../index';

describe('ButtonsLayout component', () => {
  const props = {
    render: () => <p>Random</p>,
  };
  const wrapper = shallow(<ButtonsLayout render={props.render}/>);

  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain a div with correct className', () => {
    const className = 'ButtonsLayout';
    expect(wrapper.find('div').hasClass(className)).toEqual(true);
  });
  it('should contain a div with props.render as child element', () => {
    expect(wrapper.find('.ButtonsLayout').children().first().find('p')).toHaveLength(1);
  });
});
