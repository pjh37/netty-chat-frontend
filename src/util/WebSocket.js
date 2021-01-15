export const uri = "ws://localhost:8081/ws";
export const websocket = new WebSocket(uri);
export const scrollEnd=1000000000;
export const myWebsocket={
    roomId:'',
    init:function(id){
        if(id==null)return
        var _this=this;
        _this.roomId=id
        
        document.querySelector('#btn-send').addEventListener('click',(e)=>{
            _this.onSend();
            console.log('send clicked') 
        })
        document.querySelector('#message-input').addEventListener('keydown',(e)=>{
            if(e.keyCode===13){
                _this.onSend();
                console.log('enter') 
            }
        })
        
        
        _this.connect(id);
    },
    connect:function(id){
        var _this=this;
        if(websocket.readyState===WebSocket.OPEN){
            console.log("웹소켓 열려있음")
            _this.roomEnter(id);
            
        }else{
            console.log("웹소켓 닫혀있음")
            websocket.onopen = (e)=> {
                console.log("open")
                _this.roomEnter(id);
            };
        }
        websocket.onmessage=(e)=>{
            console.log("메세지 받음")
            _this.onReceive(e)
        }
        websocket.onclose=(e)=>{
            alert('연결종료')
        }
    },
    roomEnter:function(roomId){
        
        var msg={
            command:"ROOM_ENTER",
            body:{
                roomId: roomId,
                username:'홍길동'
            }
        }
        console.log('roomEnter: '+roomId)
        websocket.send(JSON.stringify(msg));
    },
    roomCreate:function(){
        var name = localStorage.getItem('username');
        var msg = {
            command: "ROOM_CREATE",
            body: {
                username: name,
                roomName: document.querySelector('#room-name').value
            }
        }
        websocket.send(JSON.stringify(msg));
        window.location.reload();
        document.querySelector('#roomCreateModal').modal('hide')
        
    },
    onSend: function () {
        
        var message = document.querySelector('#message-input').value;
        var _this=this;
        var msg = {
            command: "CHAT_LOG_RECEIVE",
            body: {
                username: localStorage.getItem('username'),
                content: message,
                roomId: _this.roomId
            }
        }
        document.querySelector('#message-input').value = '';
        console.log(JSON.stringify(msg));
        websocket.send(JSON.stringify(msg));
    },
    onReceive: function (e) {
        var _this=this;
        let data = JSON.parse(e.data);
        if(data.roomId!==_this.roomId){
            return
        }
        let messageElem = document.createElement('div');
        let nicNameElem = document.createElement('div');
        nicNameElem.textContent = data.username;


        messageElem.style.width = "600px";
        messageElem.className = "card w-75";
        messageElem.textContent = data.content;
        messageElem.style.wordBreak = "keep-all";
        messageElem.style.wordWrap = "break-word";
        messageElem.style.marginTop = "10px";
        messageElem.style.marginLeft = "10px";
        if (localStorage.getItem('username') === data.username) {
            nicNameElem.style.color = "#736b5e";
            messageElem.style.background = '#e8e6e3';
            messageElem.style.color = 'black';
        } else {
            nicNameElem.style.color = "white";
            messageElem.style.background = '#0d6efd';
            messageElem.style.color = 'white';
        }
        messageElem.prepend(nicNameElem);
        
        
        document.querySelector('.chat-message-container').append(messageElem)

        
        // 스크롤이 맨아래 있으면 새로운 메세지 수신할 경우 맨 아래로 내려주기
        if (document.querySelector('.chat-message-container').scrollTop >= 
        document.querySelector('.chat-message-container').scrollHeight-
        document.querySelector('.chat-message-container').clientHeight-
        messageElem.clientHeight-12) {
            console.log("맨아래 스크롤 위치")
            
            document.querySelector('.chat-message-container').scrollTo(0,scrollEnd)
        }

    }
}
