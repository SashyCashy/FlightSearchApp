/**
 * File Description: This component is the dropdown content to show list of options
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */

import React from 'react';
import { Dropdown } from 'react-bootstrap';

/** SAMPLE JSON: const data = [
    { name: '1', value: 1, onClick: () => doSomething2() },
    { name: '2', value: 2, onClick: () => doSomething2() },
    { name: '3', value: 3, onClick: () => doSomething3() },
  ]; */
const DropdownComponent = ({ dropdownText, data }) => {
  return (
    <Dropdown>
      <Dropdown.Toggle variant="light" id="dropdown-basic">
        {dropdownText}
      </Dropdown.Toggle>

      <Dropdown.Menu>
        {data.map((item) => (
          <Dropdown.Item key={item.value} onClick={() => item.onClick()}>
            {item.name}
          </Dropdown.Item>
        ))}
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownComponent;
