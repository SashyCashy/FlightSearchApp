/**
 * File Description: This component is used to display status of flights
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */

import React, { Fragment, useMemo, useState } from 'react';
import styled from 'styled-components';
import { formatDisplayDate } from '../../util';

const Status = ({
  to = '',
  from = '',
  flightsCount = 0,
  travelDate = '',
  waitingStatus,
}) => {
  const [travelDateDisplay, setTravelDateDisplay] = useState(travelDate);

  useMemo(() => {
    setTravelDateDisplay(formatDisplayDate(travelDate));
  }, [travelDate]);

  let displayText = from === '' ? '' : to === '' ? '' : `${from} to ${to}`;

  return (
    <StyledStatus id="flight-status___container">
      {!waitingStatus && flightsCount > 0 ? (
        <Fragment>
          <div id="flight-status__result">{displayText}</div>
          <StyledStatsDiv id="flight-status__stats">
            <div id="flight-stats__count">{`${flightsCount} flights found`}</div>
            <div id="flight-stats__date">{travelDateDisplay}</div>
          </StyledStatsDiv>
        </Fragment>
      ) : null}
    </StyledStatus>
  );
};

const StyledStatus = styled.div`
  width: 100%;
  height: 5em;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
  border-bottom: 2px solid black;
  position: relative;
  font-size: 1em;
  color: black;
  padding: 0.2em;
  padding-left: 0.5em;
  #flight-status__result {
    width: inherit;
    height: 3em;
    display: flex;
    justify-content: start;
    align-items: center;
    font-size: 25px;
    font-weight: 600;
  }
`;

const StyledStatsDiv = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  font-size: 1em;
  font-weight: normal;
  color: gray;

  #flight-stats__count {
    margin-right: 0.8em;
  }
`;

export default Status;
