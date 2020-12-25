import React,{Component} from 'react';
import '../css/RoomListContainer.css'; 

class RoomListContainer extends Component{

    constructor(props){
        super(props);
        this.state={
            rooms:""
        }
    }

    render(){
        console.log('RoomListContainer render')
        this.state.rooms=this.props.rooms;
        return(
            <div class="roomlist-container">
                <div class="list-group">
                    {/* ajax를 통해 roomList 호출 */}
                    {
                        this.state.rooms ?
                        this.state.rooms.map(room => {
                            return (
                                <RoomItem key={room.roomId} roomId={room.roomId} title={room.title}></RoomItem>
                            )
                        }):"Loading"
                    }
                </div>
            </div>
        );
    }
}

class RoomItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <button type="button" class="list-group-item list-group-item-action"
                data-roomId={this.props.roomId}>
                {this.props.title}
                <span class="badge bg-success rounded-pill">21</span>
            </button>
        );
    }
}
export default RoomListContainer