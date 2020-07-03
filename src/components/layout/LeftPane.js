/**
 * File Description: This component is the left pane of the website to display the results of search
 * Author(s): Sashank Pindiproli
 * Date of Creation: 02/02/2020
 */

import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ToggleBtnComponent from '../common/ToggleButton';
import Dropdown from '../common/Dropdown';
import DatePicker from '../common/DatePicker';
import Button from '../common/Button';
import { Form } from 'react-bootstrap';
import TypeAhead from '../common/TypeAhead';
const LeftPane = ({
  setTo,
  setFrom,
  to,
  from,
  setFromDate,
  setToDate,
  startDate,
  returnDate,
  setList,
}) => {
  const [airportData, setAirportData] = useState([]);

  /** FETCH AIRPORT CODE DATA */

  const getAirportData = async () => {
    let result = await fetch('airport.json');
    let data = await result.json();
    setAirportData(data.map((city) => city.city_name));
  };

  useEffect(() => {
    if (airportData.length === 0) {
      getAirportData();
    }
  }, [setAirportData]);

  const radios = [
    { name: 'One Way', value: '1' },
    { name: 'Return', value: '2' },
  ];

  const dropdownData = [
    {
      name: '1',
      value: 1,
      onClick: () => setOptionValue(dropdownData[0].value),
    },
    {
      name: '2',
      value: 2,
      onClick: () => setOptionValue(dropdownData[1].value),
    },
    {
      name: '3',
      value: 3,
      onClick: () => setOptionValue(dropdownData[2].value),
    },
  ];
  const [radioValue, setRadioValue] = useState(radios[0].value);
  const [optionValue, setOptionValue] = useState(0);

  /** FETCH THE LIST OF FLIGHTS FROM flightdata.json */

  return (
    <StyledContainer id="left-pane__container">
      <StyledToggleArea id="flight-travel__options">
        <ToggleBtnComponent
          radios={radios}
          defaultVal={radioValue}
          onClick={(value) => setRadioValue(value)}
        />
      </StyledToggleArea>
      <StyledFormArea id="flight-travel__selections">
        <Form>
          <Form.Group controlId="formOriginCity">
            <TypeAhead
              placeholder="Enter Origin City"
              data={airportData}
              id="origin-city__typeahead"
              onChange={(city) => setFrom(city)}
            />
          </Form.Group>
          <Form.Group controlId="formDestinationCity">
            <TypeAhead
              placeholder="Enter Destination City"
              data={airportData}
              id="destination-city__typeahead"
              onChange={(city) => setTo(city)}
            />
          </Form.Group>
          <Form.Group controlId="formStartDate">
            <DatePicker
              type="start"
              onChange={(data) => setFromDate(data)}
              selected={startDate}
              placeholder={'Start Date'}
            />
          </Form.Group>
          {radioValue === '2' ? (
            <Form.Group controlId="formReturnDate">
              <DatePicker
                type="return"
                onChange={(data) => setToDate(data)}
                selected={returnDate}
                placeholder={'Return Date'}
              />
            </Form.Group>
          ) : null}
          <Form.Group controlId="passengerList">
            <Dropdown
              dropdownText={optionValue || 'Select Passengers'}
              data={dropdownData}
            />
          </Form.Group>

          <Button
            className="search__button"
            type="submit"
            onClick={() =>
              to === from
                ? alert(
                    'Origin and Destination City cannot be same. Please change your selection.'
                  )
                : setList(from, to)
            }
          >
            Search
          </Button>
        </Form>
      </StyledFormArea>
    </StyledContainer>
  );
};

const StyledContainer = styled.div`
  border: 2px solid black;
  width: calc(15%);
  display: flex;
  margin-top: 0.5vh;
  flex-direction: column;
`;

const StyledToggleArea = styled.div`
  width: 100%;
  height: 5em;
  padding-top: 2.3em;
  border-bottom: 2px solid black;
  position: relative;
`;

const StyledFormArea = styled.div`
  width: 100%;

  padding: 1em 0.5em;

  border-bottom: 2px solid black;
  position: relative;
  .dropdown {
    display: flex;
    border: 1px solid black;
    button {
      width: 100%;
    }
  }
`;

export default LeftPane;
