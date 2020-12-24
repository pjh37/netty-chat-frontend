import React,{Component} from 'react';

class RoomItem extends Component{
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

export default RoomItem