const fetchCustomerList = async () => {
  let data = await fetch('/api/customers');
  let result = await data.json();
  return result;
};

const fetchCustomer = async (id) => {
  let data = await fetch(`/api/user/${id}`);
  let result = await data.json();
  return result;
};

export { fetchCustomerList, fetchCustomer };
