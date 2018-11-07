import React from 'react';
import { shallow } from 'enzyme';
import Title from '../index';
import FadedLine from '../../FadedLine';

describe('Title component', () => {
  const props = () => ({
    size: 'h1',
    text: '',
  });
  const wrapper = shallow(<Title {...props()}/>);

  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain an h1 tag if size is "h1"', () => {
    const size = 'h1';
    wrapper.setProps({ size });
    expect(wrapper.find('h1')).toHaveLength(1);
  });
  it('should contain FadedLine if size is "h1"', () => {
    const size = 'h1';
    wrapper.setProps({ size });
    expect(wrapper.find(FadedLine)).toHaveLength(1);
  });
  it('should contain an h2 tag if size is "h2"', () => {
    const size = 'h2';
    wrapper.setProps({ size });
    expect(wrapper.find('h2')).toHaveLength(1);
  });
  it('should contain an h3 tag if size is "h3"', () => {
    const size = 'h3';
    wrapper.setProps({ size });
    expect(wrapper.find('h3')).toHaveLength(1);
  });
  it('should contain an h1 tag with props.text as text', () => {
    const text = 'random text';
    const size = 'h1';
    wrapper.setProps({ text, size });
    expect(wrapper.find('h1').text()).toEqual(text);
  });
});
