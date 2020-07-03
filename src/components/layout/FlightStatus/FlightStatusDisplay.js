/**
 * File Description: This component used to display search results
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */

import React, { Fragment } from 'react';
import styled from 'styled-components';
import FlightResult from '../FlightStatus/FlightResult';
import { Accordion } from 'react-bootstrap';

const FlightStatusDisplay = ({ flightsList }) => {
  let { direct, multiple } = flightsList;
  const drawAccordion = (data = [{}], index = 0) => {
    return (
      <StyledAccordion key={index}>
        <Accordion.Toggle variant="link" eventKey={index}>
          <FlightResult
            key={index}
            {...data[2].overview}
            accordionFlag={true}
          />
        </Accordion.Toggle>
        <Accordion.Collapse eventKey={index}>
          <Fragment>
            <FlightResult key={index} {...data[0].origin} />
            <FlightResult key={index} {...data[1].destination} />
          </Fragment>
        </Accordion.Collapse>
      </StyledAccordion>
    );
  };
  return (
    <StyledContainer id="search-results__container">
      {direct.map((item, index) => (
        <FlightResult key={index} {...item} />
      ))}
      {multiple.map((item, index) => drawAccordion(item, index))}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  padding-left: 1em;
  padding-right: 1em;
  overflow: scroll;
`;

const StyledAccordion = styled(Accordion)`
  button {
    display: flex;
    width: 100%;
    background: transparent;
    border: none;
    padding: 0px;
  }
  div {
    width: 100%;
  }
`;

export default FlightStatusDisplay;
