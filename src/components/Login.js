import React,{Component} from 'react';
import {Route,Router,BrowserRouter,Link} from 'react-router-dom';
import { GithubLoginButton,createButton,createSvgIcon } from "react-social-login-buttons";
import {GITHUB_AUTH_URL} from '../constants/index'
import Header from './Header';
import SignUp from './SignUp';
import "../css/Login.css";


function Login(props){
    
    return (
        <div class="container login-container">
            <form action="http://localhost:8080/login" method="post">
                <div class="mb-3">
                    <input type="text" class="form-control form-control-lg login-form" id="email" name="email" placeholder="이메일을 입력하세요." />
                    <input type="password" class="form-control form-control-lg login-form" id="pw" name="password" placeholder="비밀번호를 입력하세요." />
                </div>
                <div class="row-3">
                    <button type="submit" class="btn btn-primary" id="btn-login">로그인</button>
                </div>
            </form>
            <div class="row-3">
                <Link to={'/signup'}>
                    <button class="btn btn-success" id="btn-signIn">회원가입</button>
                </Link>
                
            </div>
            <div class="row-3" id="social-login">
                <a href={GITHUB_AUTH_URL}>
                    <GithubLoginButton />
                </a>
                
            </div>
        </div>

    )
}

export default Login