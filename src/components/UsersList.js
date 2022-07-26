import React, { Component } from 'react';
import UserDetails from './UserDetails';

class UsersList extends React.Component {
  state = {
    users: [
      { id: 1, name: 'sree' },
      { id: 2, name: 'lekha' },
    ],
  };
  render() {
    const { users } = this.state;
    return (
      <div>
        {users.map((user) => (
          <UserDetails id={user.id} />
        ))}
      </div>
    );
  }
}
export default UsersList;
