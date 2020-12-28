import React,{Component} from 'react';
import {Router,Route} from 'react-router-dom';
import '../css/SignUp.css'; 
class SignUp extends Component{
    render() {
        return (
            <div class="container signup-container">
                <form action="/signup" method="post">
                <div class="form-group">
                    <label for="nicName" class="col-form-label font-weight-bold">닉네임</label>
                    <input type="text" class="form-control" id="nicName" minlength="3" maxlength="20" placeholder="닉네임" />
                    <small id="nameHelp" class="form-text text-muted">공백없이 문자와 숫자로만 3자 이상 20자 이내로 입력하세요. 가입후에 변경할 수 있습니다.</small>
                </div>
                <div class="form-group">
                    <label for="email" class="col-form-label font-weight-bold">이메일</label>
                    <input type="email" class="form-control" id="email" placeholder="이메일" />
                    <small id="emailHelp" class="form-text text-muted">이메일은 타인에게 공개하지 않습니다.</small>
                </div>
                <div class="form-group">
                    <label for="pw" class="col-form-label font-weight-bold">비밀번호</label>
                    <input type="password" class="form-control" id="pw" minlength="8" maxlength="50" placeholder="비밀번호" />
                    <small id="passwordHelp" class="form-text text-muted">8자 이상 50자 이내로 입력하세요. 영문자, 숫자, 특수기호를 사용할 수 있으며 공백은 사용할 수 없습니다.</small>
                </div>
                <div class="form-group">
                    <label for="passwordCheck" class="col-form-label font-weight-bold">비밀번호 확인</label>
                    <input type="password" class="form-control" id="passwordCheck" minlength="8" maxlength="50" placeholder="비밀번호 확인" />
                    <small id="passwordCheckHelp" class="form-text text-danger">비밀번호가 일치하지 않습니다.</small>
                </div>
                <button type="submit" class="btn btn-primary" id="btn-join">회원가입</button>
            </form>

            </div>
            
        );
    }
}

export default SignUp