/**
 * File Description: This component is the date picker which enables user to select the date from calendar
 * Author(s): Sashank Pindiproli
 * Date of Creation: 03/02/2020
 */

import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styled from 'styled-components';

const DatePickerComponent = ({ onChange, type, selected, placeholder }) => {
  return (
    <StyledDatePicker>
      <DatePicker
        placeholderText={placeholder}
        className={`${type}__date-picker`}
        showPopperArrow={false}
        selected={selected}
        onChange={(date) => onChange(date)}
      />
    </StyledDatePicker>
  );
};

const StyledDatePicker = styled.div`
  .react-datepicker-wrapper {
    display: flex;
    width: 100%;
    .react-datepicker__input-container {
      width: inherit;
      input {
        width: inherit;
        height: 48px;
        padding: 1px;
        padding-left: 0.7em;
      }
    }
  }
`;
export default DatePickerComponent;
