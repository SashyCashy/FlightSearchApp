import React from 'react';
import { mount, render } from 'enzyme';
import LeftPane from '../LeftPane';
import { fetchCustomerList } from '../../../util';
import mock from '../../../../../public/mock.json';
beforeEach(() => {
  fetch.resetMocks();
});

describe('Fetch data for left pane ', () => {
  it('Check the fetch call ', async () => {
    fetch.mockResponseOnce(JSON.stringify(mock));

    let customerList = await fetchCustomerList();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`customer.json`);
    expect(customerList).not.toBeNull();
    expect(customerList).toHaveLength(11);
  });

  test('Check if the values are being fetched or not ', async () => {
    fetch.mockResponseOnce(JSON.stringify(mock));

    let customerList = await fetchCustomerList();
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith(`customer.json`);
    const mockCallback = jest.fn((x) => 42 + x);
    const wrapper = mount(
      <LeftPane
        customerList={customerList}
        makeDataRequest={() => mockCallback()}
      />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
