import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPencilAlt,
  faSortDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = async (id, dispatch) => {
    try {
      await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    } catch (err) {
      dispatch({ type: 'DELETE_CONTACT', payload: id });
    }
  };
  render() {
    return (
      <Consumer>
        {(value) => {
          const { name, email, phone, id } = this.props.contact;
          const { showContactInfo } = this.state;
          const { dispatch } = value;
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
                  onClick={this.onDeleteClick.bind(this, id, dispatch)}
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
        }}
      </Consumer>
    );
  }
}

Contact.propTypes = {
  contact: PropTypes.object.isRequired,
};
