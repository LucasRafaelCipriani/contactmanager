import React, { Component } from 'react';
import Contact from './Contact';
import { Consumer } from '../context';

export default class Contacts extends Component {

  render() {
    return (
      <Consumer>
        {(value) => {
          const { contacts } = value;
          return (
            <>
              {contacts.map((contact) => (
                <Contact
                  contact={contact}
                  key={contact.id}
                />
              ))}
            </>
          );
        }}
      </Consumer>
    );
  }
}
