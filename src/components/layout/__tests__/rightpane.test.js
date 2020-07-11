import React from 'react';
import { mount } from 'enzyme';
import RightPane from '../RightPane';
import { fetchCustomer } from '../../../util';

beforeEach(() => {
  fetch.resetMocks();
});

describe('Fetch data for right pane ', () => {
  it('Check the fetch call ', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        name: 'James Cameroon',
        id: 7,
        age: '24',
        address: ['Maya Linda Rd San Diego CA 92126'],
        mage: 'male.png',
      })
    );

    let customer = await fetchCustomer(7);
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`/api/user/7`);
    expect(customer).not.toBeNull();
    expect([customer]).toHaveLength(1);
  });

  test('Check if the values are being fetched or not ', async () => {
    fetch.mockResponseOnce(
      JSON.stringify({
        name: 'James Cameroon',
        id: 7,
        age: '24',
        address: ['Maya Linda Rd San Diego CA 92126'],
        image: 'male.png',
      })
    );

    let customerDetails = await fetchCustomer(7);

    const wrapper = mount(<RightPane customerDetails={customerDetails} />);
    expect(wrapper).toMatchSnapshot();
  });
});
