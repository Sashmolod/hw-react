import axios from "axios";

axios.defaults.baseURL = "http://localhost:3000";

const fetchContacts = () => {
  return axios.get("/contacts").then(response => response.data);
};

const addContact = newContact => {
  return axios.post("/contacts", newContact).then(({ data }) => data);
};

const deleteContact = contactId => {
  return axios.delete(`/contacts/${contactId}`);
};

const updateContact = (contactId, update) => {
  return axios.patch(`/contacts/${contactId}`, update).then(({ data }) => data);
};

// eslint-disable-next-line import/no-anonymous-default-export
export default { fetchContacts, addContact, deleteContact, updateContact };
