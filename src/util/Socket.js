// const websocket={
//     init:function(){
//         var _this=this;
//         _this.connect();
//         document.querySelector('#btn-send').addEventListener('click',()=>{
//             _this.onSend();
//         })
//         document.querySelector('#btn-send').addEventListener('keydown',(e)=>{
//             if(e.keyCode===13){
//                 _this.onSend();
//             }
//         })
        
//     },
//     connect:function(){
//         var _this=this;
//         var uri="ws://localhost:8081/ws";
//         websocket=new WebSocket(uri);
//         websocket.onopen=function(event){};
//         websocket.onclose=function(event){
//             alert('연결종료')
//         }
//         websocket.onmessage=function(event){
//             _this.onReceive(event); 
//         };
//     },
//     onReceive:function(event){
//         var data=JSON.parse(event.data);
//         let messageElem = document.createElement('div');
//         let nicNameElem=document.createElement('div');
//         nicNameElem.textContent=data.username;
        
        
//         messageElem.style.width="600px";
//         messageElem.className="card";
//         messageElem.textContent = data.content;
//         messageElem.style.wordBreak="keep-all";
//         messageElem.style.wordWrap="break-word";
//         messageElem.style.marginTop="10px";
//         messageElem.style.marginLeft="10px";
//         if(document.querySelector('#username').value==data.username){
//             nicNameElem.style.color="#736b5e";
//             messageElem.style.background='#e8e6e3';
//             messageElem.style.color='black';
//         }else{
//             nicNameElem.style.color="white";
//             messageElem.style.background='#0d6efd';
//             messageElem.style.color='white';
//         }
//         messageElem.prepend(nicNameElem);
//         document.querySelector('.chat-message-container').append(messageElem)
        
//         console.log(data);
//     },
//     onSend:function(){
//         var message=document.querySelector('#message-input').value;
        
//         var msg={
//             command:"CHAT_LOG_RECEIVE",
//             body:{
//                 username:document.querySelector('#username').value,
//                 content: message,
//                 roomId:roomId
//             }
//         }
//         document.querySelector('#message-input').value='';
//         console.log(JSON.stringify(msg));
//         websocket.send(JSON.stringify(msg));
//     },
//     roomEnter:function(roomId){
//         var msg={
//             command:"ROOM_ENTER",
//             body:{
//                 roomId: roomId,
//                 username:'홍길동'
//             }
//         }
//         websocket.send(JSON.stringify(msg));
//     }
// }