import React,{Component,useEffect,useState} from 'react';
import Loading from '../components/Loading';
import '../css/ChatContainer.css'; 
import {myWebsocket} from '../util/WebSocket.js';

var fetching=false;

const ChatItem=({item})=>(
    localStorage.getItem('username') == item.username ? (
        <div class="card w-75 my-message message">
            <div class="my-name">
                {item.username}
            </div>
            {item.content}
        </div>
    ):(
        <div class="card w-75 your-message message">
            <div class="your-name">
                {item.username}
            </div>
            {item.content}
        </div>
    )
)

function ChatContainer({match}){
    const [roomId,setRoomId]=useState(null)
    const [page,setPage]=useState(1)
    const [chatId,setChatId]=useState(-1)
    const [chatlist,setChatlist]=useState([])
    const [loading,setLoading]=useState(false)
    
    const fetchMoreMessage= async()=>{
        setLoading(true)
        await chatListCallApi().then(chatItem=>{
            if(chatItem.length==0){
                setLoading(false);
                return;
            }
            const mergedData=chatItem.concat(chatlist)
            setChatlist(mergedData)
            document.querySelector('.chat-message-container').scrollTo(0,
                document.querySelector('.chat-message-container').clientHeight)
                fetching=false
            setLoading(false)
        })
    }

    useEffect(()=>{
        document.querySelector('.chat-message-container').scrollTo(0,10000)
        console.log("init")
        document.querySelector(".chat-message-container").addEventListener('scroll',handleScroll)
        myWebsocket.init(match.params.room_id)
    },[])

    useEffect(()=>{
        console.log("useEffect page: "+page)
        fetchMoreMessage()
        
    },[page])

    useEffect(()=>{
        console.log("useEffect setLoading: "+loading)
    },[loading])

    const handleScroll = (e) => {
        if (document.querySelector('.chat-message-container').scrollTop == 0&&fetching==false) {
            fetching=true
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
        //console.log("chatListCallApi: "+page)
        const response=await fetch("/api/v1/messages?"+"page="+page+"&roomId="+match.params.room_id)
        const body=await response.json()
        
        return body;
    }
    
    return (
        <div class="container">
            <div class="chat-container w-75">
                <div class="chat-message-container card w-75" onScroll={handleScroll}>
                    
                    {
                        chatlist==null ? (<Loading/>):chatlist.map(chatItem=>(
                            <ChatItem key={chatItem.id} item={chatItem}></ChatItem>
                        ))
                    }
                    {
                        loading==true ? (<Loading/>):('')
                    }
                </div>
                
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