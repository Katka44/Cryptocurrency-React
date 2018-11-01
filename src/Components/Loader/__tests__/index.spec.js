import React from 'react';
import { shallow } from 'enzyme';
import Loader from '../index';
import loader from '../../../assets/loader.svg';

describe('Loader component', () => {
  const wrapper = shallow(<Loader src={loader}/>);

  it('should contain an img tag', () => {
    expect(wrapper.find('img')).toHaveLength(1);
  });
  it('should contain an img tag with correct src', () => {
    expect(wrapper.find('img').prop('src')).toEqual('loader.svg');
  });
});
