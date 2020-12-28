import React,{Component} from 'react';
import '../css/ChatContainer.css';  
class ChatContainer extends Component{
    render(){
        return (
            <div class="chat-container">
                <div class="chat-message-container card">
                    
                </div>
                <input type="text" class="form-control" id="username" placeholder="닉네임" aria-label="username"
                aria-describedby="username"/>
                <div class="chat-input-container input-group">
                    
                    <input type="text" class="form-control" id="message-input" placeholder="입력해주세요" aria-label="message-input"
                        aria-describedby="btn-send"/>
                    <button class="btn btn-outline-secondary" type="button" id="btn-send">보내기</button>
                </div>
            </div>
        );
    }
}

export default ChatContainer