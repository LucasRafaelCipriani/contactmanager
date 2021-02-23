import React, { Component } from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case 'DELETE_CONTACT':
      return {
        ...state,
        contacts: state.contacts.filter((contact) => {
          return contact.id !== action.payload;
        }),
      };
    case 'ADD_CONTACT':
      return {
        ...state,
        contacts: [action.payload, ...state.contacts],
      };
    default:
      return state;
  }
};

export class Provider extends Component {
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
    dispatch: (action) => {
      this.setState((state) => reducer(state, action));
    },
  };

  render() {
    return (
      <Context.Provider value={this.state}>
        {this.props.children}
      </Context.Provider>
    );
  }
}

export const Consumer = Context.Consumer;
