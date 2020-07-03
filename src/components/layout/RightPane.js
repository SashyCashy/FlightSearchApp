/**
 * File Description: This component is the right pane of the website to display the results of search
 * Author(s): Sashank Pindiproli
 * Date of Creation: 02/02/2020
 */

import React from 'react';
import styled from 'styled-components';
import FlightStatus from '../common/Status';
import FlightStatusDisplay from './FlightStatus/FlightStatusDisplay';

const RightPane = ({ to, from, fromDate, flightsList = [] }) => {
  let { direct, multiple } = flightsList;
  let count =
    direct !== undefined && multiple !== undefined
      ? direct.length + multiple.length
      : 0;
  return (
    <StyledContainer id="right-pane__container">
      <FlightStatus
        flightsCount={count}
        to={to}
        from={from}
        travelDate={fromDate}
      />

      {count > 0 ? <FlightStatusDisplay flightsList={flightsList} /> : null}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: 2px solid black;
  width: calc(84.2%);
  margin-left: 1vh;
  margin-top: 0.5vh;
  overflow: scroll;
`;

export default RightPane;
