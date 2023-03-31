export const checkNewContact = (contacts, newContact) => {
    const existingContactName = contacts.some(
      contact => contact.name === newContact.name,
    );
    const existingContactNumber = contacts.some(
      contact => contact.number === newContact.number,
    );
    return !existingContactName && !existingContactNumber;
  };