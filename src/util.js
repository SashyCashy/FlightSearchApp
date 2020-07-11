/*const fetchCustomerList = async () => {
  let data = await fetch('customer.json');
  let result = await data.json();
  return result;
};*/

const fetchCustomerList = async () => {
  let data = await fetch('/api/customers');
  let result = await data.json();
  return result;
};
export { fetchCustomerList };
