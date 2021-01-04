import React,{Component} from 'react';
import {Link,Route} from 'react-router-dom';
import '../css/RoomListContainer.css'; 

class RoomListContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            rooms:""
        }
    }

    render(){
        
        this.state.rooms = this.props.rooms;
        var list = [];
        if(this.state.rooms!=undefined){
            this.state.rooms.map(room => {
                
                list.push(
                    <Link to={'/rooms/'+room.roomId} key={room.roomId}>
                        <RoomItem roomId={room.roomId} title={room.title}></RoomItem>
                    </Link>
                )
            }); 
        }
        

        return(
            <div class="roomlist-container">
                <div class="list-group">
                    {/* ajax를 통해 roomList 호출 */}
                    {list}
                    
                </div>
            </div>
        );
    }
}

class RoomItem extends Component{
    constructor(props){
        super(props);
    }

    roomItemClicked=roomItem=>{
        
    }

    render(){
        return (
            <button type="button" class="list-group-item list-group-item-action"
                data-roomid={this.props.roomId}>
                {this.props.title}
                <span class="badge bg-success rounded-pill">21</span>
            </button>
        );
    }
}
export default RoomListContainer