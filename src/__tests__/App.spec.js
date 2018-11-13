import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
import Title from '../Components/Title';
import Main from '../Containers/Main';

let wrapper;
beforeEach(() => {
  wrapper = shallow(<App />);
});

describe('App component', () => {
  it('should contain a div', () => {
    expect(wrapper.find('div')).toHaveLength(1);
  });
  it('should contain one Title component', () => {
    expect(wrapper.find(Title)).toHaveLength(1);
  });
  it('should contain one Main component', () => {
    expect(wrapper.find(Main)).toHaveLength(1);
  });
});
