import React from 'react';

const Users = ({ users = [] }) => {
  const userList = users.length ? (
    users.map(user => {
      return (
        <option value={user.id}>{user.email}</option>
        // <option><button onClick={() => { onClickUser(user.id) }}>{user.email}</button></option>
      );

    })
  ) : (
      <p>User list is empty.</p>
    )
  return (
    <React.Fragment>
      {userList}
    </React.Fragment>
  )
}

export default Users