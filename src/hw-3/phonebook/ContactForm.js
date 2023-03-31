import { Component } from "react";
import { nanoid } from 'nanoid'
import Button from '@mui/material/Button';

class ContactForm extends Component {
  state = {
    name: "",
    number: "",
  };

  handleInputChange = e => {
    const { name, number, value } = e.target;
    this.setState({ [name]: value, [number]: value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, number } = this.state;
    const id = nanoid();
    const newContact = { id, name, number };
    this.props.addContact(newContact);
    this.setState({ name: "", number: "", undefined: "" });
  };

  render() {
    const { name, number } = this.state;
    return (
      <form className="" onSubmit={this.handleSubmit}>
        <label>
          Name<br />
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            value={name}
            onChange={this.handleInputChange}
            required
          />
        </label><br /><br />
        <label>
          Number<br />
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            value={number}
            onChange={this.handleInputChange}
            required
          />
        </label><br /><br />
        <Button variant="contained" type="submit">Add contact</Button>
      </form>
    );
  }
}

export default ContactForm;
