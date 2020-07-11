/**
 * File Description: This component is navbar that gets displayed on the top of the screen
 * Author(s): Sashank Pindiproli
 * Date of Creation: 11/07/2020
 */
import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Navbar = ({ navbarTitle }) => {
  return (
    <StyledContainer>
      <StyledLabel>{navbarTitle}</StyledLabel>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  height: 7vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: black;
`;

const StyledLabel = styled.div`
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  font-weight: bold;
  color: white;
`;

Navbar.propTypes = {
  navbarTitle: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  navbarTitle: 'Customer Details',
};

export default Navbar;
