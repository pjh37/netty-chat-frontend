import React,{Component} from 'react';
import RoomItem from './RoomItem';
import '../css/RoomListContainer.css'; 

class RoomListContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            rooms:""
        }
    }
    

    componentDidMount(){
        this.callRoomApi()
        .then(res=>this.setState({rooms:res}))
        .then(err=>console.log(err));
    }

    callRoomApi=async()=>{
        const response=await fetch("http://localhost:8080/api/v1/rooms");
        const body=await response.json();
        return body;
    }

    render(){
        return(
            <div class="roomlist-container">
                <div class="list-group">
                    
                {/* ajax를 통해 roomList 호출 */}
                {
                    this.state.rooms.data ? 
                    this.state.rooms.data.map(room=>{
                        return(<RoomItem roomId={room.roomId} title={room.title}></RoomItem>)
                    }):""
                }
               
                </div>
            </div>
        );
    }
}

export default RoomListContainer