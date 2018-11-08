import React from 'react';
import { shallow } from 'enzyme';
import ColorCode from '../index';

describe('ColorCode component', () => {
  const props = {
    text: '-5',
    className: '',
    isListView: false,
  };
  const wrapper = shallow(<ColorCode {...props}/>);

  it('should contain a li', () => {
    expect(wrapper.find('li')).toHaveLength(1);
  });
  it('should contain a li with correct classNames', () => {
    const className = 'Color-code';
    expect(wrapper.find('li').hasClass(`${className} ${props.className}`)).toEqual(true);
  });
  it('should contain a li with props.text as child element', () => {
    expect(wrapper.find('li').text()).toEqual(props.text);
  });
});
