import React from 'react';
import { withRouter } from 'react-router-dom';

function LogoutButton({ logout, history }) {
  const handleClick = () => {
    logout();
    history.push('/');
  }
  return <button class='btn btn-secondary' onClick={handleClick}>Logout</button>;
}

export default withRouter(LogoutButton);