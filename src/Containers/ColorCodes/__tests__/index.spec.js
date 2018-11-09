import React from 'react';
import { shallow } from 'enzyme';
import ColorCodes from '../index';
import ColorCodesLayout from '../../../Components/Layouts/ColorCodesLayout';
import ColorCode from '../../../Components/ColorCode';

describe('ColorCodes component', () => {
  const props = () => ({
    isListView: false,
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<ColorCodes {...props()}/>);
  });

  it('should render ColorCodesLayout', () => {
    expect(wrapper.find(ColorCodesLayout)).toHaveLength(1);
  });
  /*
  it('should render a ul', () => {
    const child = <ul>Random</ul>;
    const render = jest.fn().mockReturnValue(child);
    const layoutProps = () => ({
      render,
    });
    const mockColorCodesLayout = shallow(<ColorCodesLayout {...layoutProps()}/>);
    expect(wrapper.find('ul')).toHaveLength(1);
  });
  */
});
