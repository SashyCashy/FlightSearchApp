import React from 'react';

import { shallow } from 'enzyme';
import App from './App';
describe('<App /> ', () => {
  it('Check the App structure ', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
});
