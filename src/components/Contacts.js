import React, { Component } from 'react';
import Contact from './Contact';

export default class Contacts extends Component {
  state = {
    contacts: [
      {
        name: 'John Doe',
        email: 'jdoe@gmail.com',
        phone: '555-555-5555',
        id: 1,
      },
      {
        name: 'Karen Smith',
        email: 'ksmith@gmail.com',
        phone: '444-444-4444',
        id: 2,
      },
      {
        name: 'Lucas Cipriani',
        email: 'lcipriane@mcfadyen.com',
        phone: '123-456-7890',
        id: 3,
      },
    ],
  };

  render() {
    const { contacts } = this.state;
    return (
      <div>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </div>
    );
  }
}
