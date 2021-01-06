import React from 'react';
import { withRouter } from 'react-router-dom';
import {LOGOUT_URL} from '../constants/index'
import '../css/Header.css';

function LogoutButton(props) {
  const handleClick = () => {
    console.log(localStorage.getItem('username'))
    localStorage.removeItem('username')
    
  }
  return <a href={LOGOUT_URL} onClick={handleClick} id="logout">로그아웃</a>;
}

export default withRouter(LogoutButton);