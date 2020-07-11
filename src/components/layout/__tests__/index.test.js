import React from 'react';

import { shallow } from 'enzyme';
import Layout from '../index';
describe('<Layout /> ', () => {
  it('Check the layout structure ', () => {
    const wrapper = shallow(<Layout />);

    expect(wrapper).toMatchSnapshot();
  });
});
