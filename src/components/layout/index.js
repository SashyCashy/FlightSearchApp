/**
 * File Description: This component is the body of the website that has left and right pane
 * Author(s): Sashank Pindiproli
 * Date of Creation: 02/02/2020
 */

import React, { useState } from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import LoaderIcon from '../../app/assets/spinner';
import styled from 'styled-components';
import { findMultiAirline } from '../../util';
const Content = () => {
  const [to, setTo] = useState();
  const [from, setFrom] = useState();
  const [startDate, setStartDate] = useState();
  const [returnDate, setReturnDate] = useState();
  const [flightsList, setFlightsList] = useState([]);
  const [waitingStatus, setWaitingStatus] = useState(false);

  /** THIS CODE SHOULD MOVE TO SERVER */
  const fetchFlightList = async (from, to) => {
    let data = await fetch('flightdata.json');
    let result = await data.json();
    let directFlights = result.filter(
      (item) => item.destination === to && item.origin === from
    );
    let multipleFlightsPath = await findMultiAirline(result, from, to);
    setFlightsList({ direct: directFlights, multiple: multipleFlightsPath });

    setTimeout(() => {
      setWaitingStatus(false);
      console.log();
    }, 5000);
  };

  return (
    <StyledContainer id="app__container">
      <LeftPane
        setFrom={(city) => setFrom(city)}
        setTo={(city) => setTo(city)}
        to={to}
        from={from}
        setFromDate={(date) => setStartDate(date)}
        startDate={startDate}
        setToDate={(date) => setReturnDate(date)}
        returnDate={returnDate}
        setList={(from, to) => {
          if (waitingStatus === false) {
            setWaitingStatus(true);
          }
          fetchFlightList(from, to);
          //setFlightsList(filteredList);
        }}
      />
      {!waitingStatus ? (
        <RightPane
          waitingStatus={waitingStatus}
          to={to}
          from={from}
          fromDate={startDate}
          toDate={returnDate}
          flightsList={flightsList}
        />
      ) : (
        <StyledLoaderContainer>
          <LoaderIcon id="loader" />
        </StyledLoaderContainer>
      )}
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: flex;
  height: 94vh;
  width: 100vw;
  position: relative;
`;
export const StyledLoaderContainer = styled.div`
  width: calc(84.2%);
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid black;
  margin-left: 1vh;
  margin-top: 0.5vh;
`;
export default Content;
