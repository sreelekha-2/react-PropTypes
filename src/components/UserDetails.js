import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class UserDetails extends React.Component {
  render() {
    return (
      <div>
        <p>Name:{this.props.name}</p>
        <p>ID:{this.props.id}</p>
      </div>
    );
  }
}
UserDetails.defaultProps = {
  name: 'SREELEKHA',
};

UserDetails.propTypes = {
  name: PropTypes.string,
  id: PropTypes.number,
};
