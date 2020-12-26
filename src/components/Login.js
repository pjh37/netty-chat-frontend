import React,{Component} from 'react';
import "../css/Login.css";

class Login extends Component{
    render(){
        return (
            <div class="container">
                <div class="mb-3">
                    <input type="text" class="form-control form-control-lg login-form" id="id" placeholder="아이디를 입력하세요."/>
                    <input type="password" class="form-control form-control-lg login-form" id="pw" placeholder="비밀번호를 입력하세요."/>
                </div>
                <div class="row-3"><button class="btn btn-primary" id="btn-login">로그인</button></div>
                <div class="row-3"><button class="btn btn-success" id="btn-signIn">회원가입</button></div>
                
            </div>
        );
    }
}

export default Login