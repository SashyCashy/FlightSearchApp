/**
 * File Description: This component is the right pane of the website to display the results of customer
 * Author(s): Sashank Pindiproli
 * Date of Creation: 11/07/2020
 */

import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const RightPane = ({ customerDetails }) => {
  let { name, address, image } = customerDetails;
  if (name !== undefined && address.length === 0)
    address.push('No address found');
  return (
    <StyledContainer id="right-pane__container">
      {name !== undefined && image !== undefined ? (
        <StyledCard>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Img src={image}></Card.Img>
            {address.map((item, index) => (
              <Card.Text key={index}>{item}</Card.Text>
            ))}
          </Card.Body>
        </StyledCard>
      ) : null}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: calc(59.1%);
  margin-left: 1vh;
  margin-top: 0.5vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #78e3fd;
`;

const StyledCard = styled(Card)`
  height: 40em;
  width: 40em;

  .card-title {
    font-size: 32px;
    height: 2em;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .card-img {
    width: 25em;
  }
  .card-text {
    height: 3em;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

RightPane.propTypes = {
  customerDetails: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  address: PropTypes.array.isRequired,
};

RightPane.defaultProps = {
  customerDetails: {},
  name: '',
  image: '',
  address: [],
};
export default RightPane;
