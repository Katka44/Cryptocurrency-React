import React from 'react';
import { shallow } from 'enzyme';
import Message from '../index';

describe('Loader component', () => {
  const message = '';
  const wrapper = shallow(<Message message={message}/>);

  it('should contain a div tag', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain a div tag with correct className', () => {
    expect(wrapper.find('.Message')).toHaveLength(1);
  });
  it('should contain a p tag', () => {
    expect(wrapper.find('p')).toHaveLength(1);
  });
  it('should contain a p tag with correct className', () => {
    expect(wrapper.find('.Message__text')).toHaveLength(1);
  });
  it('should contain a p tag with correct content', () => {
    expect(wrapper.find('.Message__text').text()).toEqual(message);
  });
});
