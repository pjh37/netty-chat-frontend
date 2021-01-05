import React from 'react';
import { withRouter } from 'react-router-dom';

function LogoutButton(props) {
  const handleClick = () => {
    console.log(localStorage.getItem('username'))
    props.history.push('/');
  }
  return <button class='btn btn-secondary' onClick={handleClick}>{localStorage.getItem('username')}</button>;
}

export default withRouter(LogoutButton);