const fetchCustomerList = async () => {
  let data = await fetch('customer.json');
  let result = await data.json();
  return result;
};

export { fetchCustomerList };
