import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Consumer } from '../context';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCoffee,
  faPlus,
  faSortDown,
  faTimes,
} from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
  state = {
    showContactInfo: false,
  };

  onShowClick = () => {
    this.setState({ showContactInfo: !this.state.showContactInfo });
  };

  onDeleteClick = (id, dispatch) => {
    dispatch({ type: 'DELETE_CONTACT', payload: id });
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
