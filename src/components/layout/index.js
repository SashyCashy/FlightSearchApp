/**
 * File Description: This component is the body of the website that has left and right pane
 * Author(s): Sashank Pindiproli
 * Date of Creation: 11/07/2020
 */

import React, { useState, useEffect } from 'react';
import LeftPane from './LeftPane';
import RightPane from './RightPane';
import LoaderIcon from '../../app/assets/spinner';
import styled from 'styled-components';

import { fetchCustomerList } from '../../util';

const Content = () => {
  const [waitingStatus, setWaitingStatus] = useState(false);
  const [customerList, setCustomerList] = useState([]);
  const [customerDetails, setCustomerDetails] = useState({});
  /** THIS CODE SHOULD MOVE TO SERVER */

  useEffect(() => {
    const fetchData = async () => {
      if (customerList.length === 0) {
        let result = await fetchCustomerList();
        setCustomerList(result);
      }
    };
    fetchData();
  }, [customerList.length]);

  const makeDataRequest = (filterId) => {
    setWaitingStatus(true);
    let filteredCustomer = customerList.find(({ id }) => id === filterId);
    if (filteredCustomer !== undefined) {
      //let { address } = filteredCustomer;
      setCustomerDetails(filteredCustomer);
      //else if (address.length === 0) setCustomerDetails(['No address found']);
    }

    setTimeout(() => {
      setWaitingStatus(false);
    }, 2000);
  };

  return (
    <StyledContainer id="app__container">
      <LeftPane customerList={customerList} makeDataRequest={makeDataRequest} />
      {!waitingStatus ? (
        <RightPane customerDetails={customerDetails} />
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
  height: 92vh;
  width: 100vw;
  position: relative;
`;
export const StyledLoaderContainer = styled.div`
  width: calc(59.1%);
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eef8ff;
  margin-left: 1vh;
  margin-top: 0.5vh;
`;
export default Content;
