/**
 * File Description: This component is used to display a single result from the search and enables interaction
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */

import React from 'react';
import styled from 'styled-components';
import { calculateTimeDifference, formatMoney } from '../../../util';
import dummy from '../../../app/assets/dummy.png';
import ButtonComponent from '../../common/Button';
/**
 * 
 * SAMPLE DATA : {
    "arrivalTime": "16:30",
    "date": "2020/11/01",
    "departureTime": "14:00",
    "destination": "Bengaluru (BLR)",
    "flightNo": "AI-111",
    "name": "Air India",
    "origin": "Delhi (DEL)",
    "price": 5217
  }
 */

const FlightResult = ({
  arrivalTime,
  date,
  departureTime,
  destination,
  flightNo,
  name,
  origin,
  price,
  accordionFlag = false,
  duration,
}) => {
  return (
    <StyledContainer id={`search-results__item ${flightNo}`}>
      <StyledImage src={dummy} alt="Dummy Image" />
      <StyledNameContainer>
        <div id="search-results__flightName" className="title">
          {name}
        </div>
        <div id="search-results__flightNo" className="subTitle">
          {flightNo}
        </div>
      </StyledNameContainer>
      <StyledNameContainer>
        <div id="search-results__departureTime" className="title">
          {departureTime}
        </div>
        <div id="search-results__origin" className="subTitle">
          {origin}
        </div>
      </StyledNameContainer>
      <StyledNameContainer>
        <div id="search-results__arrivalTime" className="title">
          {arrivalTime}
        </div>
        <div id="search-results__destination" className="subTitle">
          {destination}
        </div>
      </StyledNameContainer>
      <StyledNameContainer>
        <div id="search-results__flightDuration" className="title">
          {duration ||
            calculateTimeDifference(
              date + ' ' + departureTime,
              date + ' ' + arrivalTime
            )}
        </div>
        <div id="search-results__flightType" className="subTitle">
          Non Stop
        </div>
      </StyledNameContainer>
      <StyledPriceContainer>{formatMoney(price, 'INR')}</StyledPriceContainer>
      <div style={{ padding: '1em' }}>
        {!accordionFlag ? (
          <ButtonComponent
            variant="danger"
            onClick={() => alert('Booked Successfully!')}
          >
            Book
          </ButtonComponent>
        ) : (
          <div
            className="fakeButton"
            onClick={() => alert('Booked Successfully!')}
          >
            Book
          </div>
        )}
      </div>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  display: grid;
  margin-top: 0.5em;
  grid-template-columns: 0.2fr 1fr 1fr 1fr 1fr 1fr 1fr;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  .fakeButton {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    color: danger;
    width: 100%;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-align-items: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    background: rgb(215, 46, 50);
    height: 40px;
    color: white;
    border-radius: 5px;
  }
`;

const StyledImage = styled.img`
  width: 75px;
  height: auto;
`;
const StyledNameContainer = styled.div`
  .title {
    font-size: 18px;
    font-weight: bold;
  }
  .subTitle {
    font-size: 14px;
    color: gray;
  }
`;

const StyledPriceContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  color: red;
`;
export default FlightResult;
