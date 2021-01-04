import React,{Component} from 'react';
import {Route,Router,BrowserRouter,Link} from 'react-router-dom';
import Cookies from 'js-cookie';
import {GITHUB_AUTH_URL} from '../constants/index'
import LogoutButton from './LogoutButton';
import '../css/Header.css';
function Header(props){
    return (
        <header>
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                <div class="container-fluid">
                    
                    <Link to='/' class="navbar-brand">
                        ChatService
                    </Link>

                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" 
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    {Cookies.get('name') != undefined ? (
                        <LogoutButton logout={props.logout} />
                    ) : (
                            <div class="collapse navbar-collapse" id="navbarNav">
                                <ul class="navbar-nav">
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