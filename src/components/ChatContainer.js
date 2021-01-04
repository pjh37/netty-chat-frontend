import React,{Component,useEffect,useState} from 'react';
import '../css/ChatContainer.css'; 


const uri = "ws://localhost:8081/ws";
const websocket = new WebSocket(uri);

const myWebsocket={
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
            return
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
    onSend: function () {
        var message = document.querySelector('#message-input').value;
        var _this=this;
        var msg = {
            command: "CHAT_LOG_RECEIVE",
            body: {
                username: document.querySelector('#username').value,
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
        if(data.roomId!=_this.roomId){
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
        if (document.querySelector('#username').value == data.username) {
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
    }
}

const ChatItem=({item})=>(
    document.querySelector('#username').value == item.name ? (
        <div class="card w-75 my-message message">
            <div class="my-name">
                {item.name}
            </div>
            {item.content}
        </div>
    ):(
        <div class="card w-75 your-message message">
            <div class="your-name">
                {item.name}
            </div>
            {item.content}
        </div>
    )
    
)
var fetching=false;
function ChatContainer({match}){
    const [roomId,setRoomId]=useState(null)
    const [page,setPage]=useState(1)
    const [chatId,setChatId]=useState(-1)
    const [chatlist,setChatlist]=useState([])
    //const [fetching,setFetching]=useState(false)
    
    const fetchMoreMessage= async()=>{
        fetching=true
        await chatListCallApi().then(chatItem=>{
            console.log("chatListCallApi")
            const mergedData=chatItem.concat(chatlist)
            
            // console.log(mergedData)
            setChatlist(mergedData)
            document.querySelector('.chat-message-container').scrollTo(0,
                document.querySelector('.chat-message-container').clientHeight)
            fetching=false
        })
        
    }

    useEffect(()=>{
        document.querySelector('.chat-message-container').scrollTo(0,10000)
        console.log("init")
        document.querySelector(".chat-message-container").addEventListener('scroll',handleScroll)
        myWebsocket.init(match.params.room_id)
    },[])

    useEffect(()=>{
        console.log("useEffect fetchMoreMessage")
        console.log("is fetching: "+fetching)
        fetchMoreMessage()
    },[page])

    const handleScroll = (e) => {
        
        if (document.querySelector('.chat-message-container').scrollTop == 0&&fetching==false) {
            //document.querySelector('.chat-message-container').prepend('<div style="width: 600px; height: 200px;"><h1>Page ' + 'test' + '</h1></div>');
            fetching=true
            
            console.log("clientHeight: "+document.querySelector('.chat-message-container').scrollTop)
            nextPage()
        }
    }
    const prevPage=()=>{
        setPage(page-1)
    }

    const nextPage=()=>{ 
        setPage(prevPage=>prevPage+1)
    }

    const chatListCallApi=async ()=>{
        var chatId=localStorage.getItem("lastMessage")
        console.log("chatListCallApi: "+page)
        const response=await fetch("/api/v1/messages?"+"page="+page+"&roomId="+match.params.room_id)
        const body=await response.json()
        
        return body;
    }
    

    

    return (
        <div class="container">
            <div class="chat-container w-75">
                <div class="chat-message-container card w-75" onScroll={handleScroll}>
                    {
                        chatlist==null ? (''):chatlist.map(chatItem=>(
                            <ChatItem key={chatItem.id} item={chatItem}></ChatItem>
                        ))
                    }
                </div>
                <input type="text" class="form-control w-75" id="username" placeholder="닉네임" aria-label="username"
                    aria-describedby="username" />
                <div class="chat-input-container input-group w-75">

                    <input type="text" class="form-control" id="message-input" placeholder="입력해주세요" aria-label="message-input"
                        aria-describedby="btn-send" />
                    <button class="btn btn-outline-secondary" type="button" id="btn-send">보내기</button>
                </div>
            </div>
        </div>
        
    );
}

export default ChatContainer