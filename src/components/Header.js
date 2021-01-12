import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import LogoutButton from './LogoutButton';
import '../css/Header.css';

function Header(props){
    const [username,setUsername]=useState('')
    useEffect(()=>{
        if(Cookies.get('username')!=undefined){
            setUsername(Cookies.get('username'))
        }
        console.log("header")
    },[username])
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    
                    <Link to='/' class="navbar-brand">
                        Netty
                    </Link>

                    
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {localStorage.getItem('username') != undefined ? (
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <LogoutButton authenticated={props.authenticated} logout={props.logout} username={localStorage.getItem('username')} />
                                </li>
                            </ul>
                        </div>  
                    ) : (
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav nav-menu">
                                    <li class="nav-item">
                                        <Link to={'/login'} class="nav-link headerMenu">
                                            로그인
                                        </Link>
                                    </li>
                                    <li class="nav-item">
                                        <Link to={'/SignUp'} class="nav-link headerMenu">
                                            회원가입
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            
                        )}


                </div>
            </nav>
        </header>
    );
}

export default Header