/**
 * File Description: This component is the left pane of the website to display the results of the customer
 * Author(s): Sashank Pindiproli
 * Date of Creation: 11/07/2020
 */

import React, { useState } from 'react';
import { ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const LeftPane = ({ customerList, makeDataRequest }) => {
  const [activeId, setActiveId] = useState(-1);

  /** FETCH THE LIST OF CUSTOMERS FROM customers.json */

  return (
    <StyledContainer id="left-pane__container">
      <ListGroup as="ul">
        {customerList.map(({ name, id, age }) => (
          <ListGroup.Item
            as="li"
            active={activeId === id}
            key={id}
            action
            onClick={() => {
              setActiveId(id);
              makeDataRequest(id);
            }}
          >
            <div>{id}</div>
            <div>{name}</div>
            <div>{age}</div>
          </ListGroup.Item>
        ))}
      </ListGroup>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  width: calc(40%);
  display: flex;
  margin-top: 0.5vh;
  flex-direction: column;
  overflow: scroll;

  height: 91.5vh;
  .list-group-item {
    display: grid;
    grid-template-columns: 0.5fr 1fr 1fr;
    background: #78e3fd;
    font-size: 2em;
    font-weight: 500;
  }
`;

LeftPane.propTypes = {
  customerList: PropTypes.array.isRequired,
  makeDataRequest: PropTypes.func,
};

LeftPane.defaultProps = {
  customerList: [],
};

export default LeftPane;
