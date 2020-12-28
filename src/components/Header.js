import React,{Component} from 'react';
import {Route,Router,BrowserRouter,Link} from 'react-router-dom';
import Login from './Login';
import SignUp from './SignUp';
class Header extends Component{
    render(){
        return (
            <header>
                <nav class="navbar navbar-dark bg-dark">
                    <div class="container-fluid">
                        <a class="navbar-brand">ChatService</a>
                        <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <Link to={'/login'}>
                            <span>로그인</span>
                        </Link>
                        
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header