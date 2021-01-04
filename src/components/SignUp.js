import React,{Component} from 'react';
import {Router,Route} from 'react-router-dom';
import '../css/SignUp.css'; 
class SignUp extends Component{

    constructor(props){
        super(props)
        this.state={
            passwordLengthCheck:''
        }
    }

    

    passwordCheck=(e)=>{
        e.preventDefault()
        var password=document.getElementById('password').value;
        var passwordCheck=e.target.value
        
        if(passwordCheck!=password){
            console.log('diff')
            this.setState({
                passwordLengthCheck:'입력한 비밀번호와 일치하지 않습니다.'
            })
        }else{
            console.log('same')
            this.setState({
                passwordLengthCheck:''
            })
        }
    }

    handleSignup=(e)=>{
        console.log(document.getElementById('name').value);
        console.log(document.getElementById('email').value);
        console.log(document.getElementById('password').value);
        var data={
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            password: document.getElementById('password').value
        }
        
        fetch("http://localhost:8080/api/v1/signup", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
          })
            .then((response) => response.json())
            .then((data) => console.log(data))
    }


    render() {
        return (
            <div class="container signup-container">
                <div class="form-group">
                    <label for="nicName" class="col-form-label font-weight-bold">닉네임</label>
                    <input type="text" class="form-control" id="name" minlength="3" maxlength="20" placeholder="닉네임" />
                    <small id="nameHelp" class="form-text text-muted">공백없이 문자와 숫자로만 3자 이상 20자 이내로 입력하세요. 가입후에 변경할 수 있습니다.</small>

                </div>
                <div class="form-group">
                    <label for="email" class="col-form-label font-weight-bold">이메일</label>
                    <input type="email" class="form-control" id="email"  placeholder="이메일" />
                    <small id="emailHelp" class="form-text text-muted">이메일은 타인에게 공개하지 않습니다.</small>
                </div>
                <div class="form-group">
                    <label for="pw" class="col-form-label font-weight-bold">비밀번호</label>
                    <input type="password" class="form-control" id="password"  minlength="8" maxlength="15" placeholder="비밀번호" />
                    <small id="passwordHelp" class="form-text text-muted">8자이하 15자 이하로 입력해주세요</small>
                </div>
                <div class="form-group">
                    <label for="passwordCheck" class="col-form-label font-weight-bold">비밀번호 확인</label>
                    <input type="password" class="form-control" id="passwordCheck" minlength="8" maxlength="50" placeholder="비밀번호 확인" onChange={this.passwordCheck} />
                    <small id="passwordCheckHelp" class="form-text text-danger">{this.state.passwordLengthCheck}</small>
                </div>
                <button type="button" class="btn btn-primary" id="btn-join" onClick={this.handleSignup}>회원가입</button>

            </div>

        );
    }
}

export default SignUp