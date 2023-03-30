import { Component } from "react";
import Button from '@mui/material/Button';

class ContactList extends Component {
  render() {
    const { contacts, deleteContact } = this.props;
    return (
      <ul className="value">
        {contacts.map(({ id, name, number }) => (
          <li key={id} className="valueli">
            {name} : {number}
            <Button variant="outlined" color="error" onClick={() => deleteContact(id)}>
              Удалить
            </Button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
