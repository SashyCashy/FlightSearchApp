/**
 * File Description: This component is navbar that gets displayed on the top of the screen
 * Author(s): Sashank Pindiproli
 * Date of Creation: 02/02/2020
 */
import React from 'react';
import styled from 'styled-components';
const Navbar = () => {
  const NAVBAR_TITLE = 'Flight Search App';

  return (
    <StyledContainer>
      <StyledLabel>{NAVBAR_TITLE}</StyledLabel>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 5vh;
  border: 2px solid black;
`;

const StyledLabel = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: start;
  align-items: center;
  margin: 10px;
`;

export default Navbar;
