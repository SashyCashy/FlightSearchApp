/**
 * File Description: This component is a toggle button. For eg :Yes/No button
 * Author(s): Sashank Pindiproli
 * Date of Creation: 02/02/2020
 */

/** SAMPLE JSON: const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ]; */
import React from 'react';
import { ToggleButton, ButtonGroup } from 'react-bootstrap';
import styled from 'styled-components';

const ToggleBtnComponent = ({ radios, defaultVal, onClick }) => {
  return (
    <StyledButtonGroup toggle>
      {radios.map((radio, idx) => (
        <ToggleButton
          key={idx}
          className="toggle-btn__container"
          type="radio"
          variant={defaultVal === radio.value ? 'primary' : 'light'}
          name="radio"
          value={radio.value}
          checked={defaultVal === radio.value}
          onChange={(e) => onClick(e.currentTarget.value)}
        >
          {radio.name}
        </ToggleButton>
      ))}
    </StyledButtonGroup>
  );
};

const StyledButtonGroup = styled(ButtonGroup)`
  display: flex;
`;

export default ToggleBtnComponent;
