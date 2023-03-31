import React, { Component } from "react";
import ContactForm from "./ContactForm";
import ContactList from "./ContactList";
import Filter from "./Filter";
import { checkNewContact } from "./Utils";
import "./Styles.css";
import contactsApi from "../../services/contacts-api";

class Phonebook extends Component {
  state = {
    contacts: [],
    filter: "",
  };

  componentDidMount() {
    contactsApi
      .fetchContacts()
      .then(contacts => this.setState({ contacts }))
      .catch(error => console.log(error));
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      //console.log("Обновилось поле contacts");
      localStorage.setItem("contacts", JSON.stringify(this.state.contacts));
    }
  }

  addContact = newContact => {
    if (!checkNewContact(this.state.contacts, newContact)) {
      alert("Контакт с таким именем или номером уже существует!");
      return;
    }
    contactsApi.addContact(newContact).then(ncontact => {
      this.setState(({ contacts }) => ({
        contacts: [...contacts, ncontact],
      }));
    });
  };

  deleteContact = contactId => {
    contactsApi.deleteContact(contactId).then(() => {
      this.setState(({ contacts }) => ({
        contacts: contacts.filter(({ id }) => id !== contactId),
      }));
    });
  };

  contactCompleted = contactId => {
    contactsApi.updateContact(contactId)
      .then((updatedContact) => {
        this.setState(({ contacts }) => ({
          contacts: contacts.map(contact =>
            contact.id === updatedContact.id ? updatedContact : contact,
          ),
        }));
      });
  };

  filterContact = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContact = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  render() {
    const { filter } = this.state;
    const visibleContact = this.getVisibleContact();
    return (
      <div className="Phonebook">
        <h1>Phonebook</h1>
        <ContactForm addContact={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={filter} filterContact={this.filterContact} />
        <ContactList
          deleteContact={this.deleteContact}
          contacts={visibleContact}
        />
      </div>
    );
  }
}

export default Phonebook;
