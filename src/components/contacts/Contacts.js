import React, { Component } from 'react';
import Contact from './Contact';
import { connect } from 'react-redux';
import { getContacts } from '../../actions/contactActions';
import PropTypes from 'prop-types';

class Contacts extends Component {
  componentDidMount() {
    this.props.getContacts();
  }
  render() {
    const { contacts } = this.props;
    return (
      <>
        <h1 className="display-4 mb-2">
          <span className="text-danger">Contact</span> List
        </h1>
        {contacts.map((contact) => (
          <Contact contact={contact} key={contact.id} />
        ))}
      </>
    );
  }
}

Contacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  contacts: state.contactReducer.contacts,
});

export default connect(mapStateToProps, { getContacts })(Contacts);
