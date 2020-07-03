/**
 * File Description: This component is button, allows user to customize by passing the necessary props and it can be extended
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */

/** SAMPLE JSON: const radios = [
    { name: 'Active', value: '1' },
    { name: 'Radio', value: '2' },
    { name: 'Radio', value: '3' },
  ]; */
import React from 'react';
import { Button } from 'react-bootstrap';
import styled from 'styled-components';

const ButtonComponent = ({
  variant = 'primary',
  children,
  className,
  onClick,
}) => {
  return (
    <StyledButton className={className} variant={variant} onClick={onClick}>
      {' '}
      {children}{' '}
    </StyledButton>
  );
};

const StyledButton = styled(Button)`
  display: flex;
  color: ${(props) => props.variant};
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export default ButtonComponent;
