import React from 'react';
import { shallow } from 'enzyme';
import Buttons from '../index';
import ButtonsLayout from '../../../Components/Layouts/ButtonsLayout';
import FadedLinesLayout from '../../../Components/Layouts/FadedLinesLayout';
import Button from '../../../Components/Button';
import Input from '../../../Components/Input';

describe('Buttons component', () => {
  const props = () => ({
    data: [],
    filter: '',
    handleTextChange: jest.fn(),
    handleSort: jest.fn(),
    isListView: false,
    toggleListView: jest.fn(),
  });
  let wrapper;

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<Buttons {...props()}/>);
  });
  it('should render ButtonsLayout', () => {
    expect(wrapper.find(ButtonsLayout)).toHaveLength(1);
  });
  it('should render FadedLinesLayout', () => {
    expect(wrapper.dive().find(FadedLinesLayout)).toHaveLength(6);
  });
  /*
  it('should call FadedLinesLayout render prop', () => {
    const fadedLinesRender = jest.fn();
    const fadedLinesProps = () => ({
      render: fadedLinesRender,
    });
    const buttonsLayoutChild = <FadedLinesLayout {...fadedLinesProps()}/>;
    const buttonsLayoutRender = jest.fn().mockReturnValue(buttonsLayoutChild);
    const buttonsLayoutProps = () => ({
      render: buttonsLayoutRender,
    });
    const buttonsChild = <ButtonsLayout {...buttonsLayoutProps()}/>;
    // const buttonsRender = jest.fn().mockReturnValue(buttonsChild);
    // const buttonsProps = () => ({
    //   render: buttonsRender,
    // });
    // wrapper.setProps({ ...buttonsProps });
    jest.doMock('../index', () => () => buttonsChild);
    expect(fadedLinesRender).toHaveBeenCalled();
  });
  */
});
