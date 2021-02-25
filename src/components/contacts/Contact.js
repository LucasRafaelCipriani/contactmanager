import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faSortDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteContact } from '../../actions/contactActions';

class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id) => {
    this.props.deleteContact(id);
  };
  render() {
    const { name, email, phone, id } = this.props.contact;
    const { showContactInfo } = this.state;
    return (
      <div className="card card-body mb-3">
        <h4>
          {name}{' '}
          <FontAwesomeIcon
            icon={faSortDown}
            onClick={this.onShowClick}
            style={{ cursor: 'pointer' }}
          />
          <FontAwesomeIcon
            icon={faTimes}
            onClick={this.onDeleteClick.bind(this, id)}
            style={{ cursor: 'pointer', float: 'right', color: 'red' }}
          />
          <Link to={`/contact/edit/${id}`}>
            <FontAwesomeIcon
              icon={faPencilAlt}
              style={{
                cursor: 'pointer',
                float: 'right',
                color: 'black',
                marginRight: '1rem',
              }}
            />
          </Link>
        </h4>
        {showContactInfo ? (
          <ul className="list-group">
            <li className="list-group-item">Email: {email}</li>
            <li className="list-group-item">Phone: {phone}</li>
          </ul>
        ) : null}
      </div>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default connect(null, { deleteContact })(Contact);
