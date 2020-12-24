import React,{Component} from 'react';
import RoomCreateModal from './RoomCreateModal';
import '../css/MenuContainer.css';

class MenuContainer extends Component{
    render(){
        return (
            <div class="menu-container">
                <button type="button" class="btn btn-primary"
                    data-toggle="modal" data-target="#roomCreateModal">
                    채팅방 생성
                </button>
                <RoomCreateModal></RoomCreateModal>
            </div>
        );
    }
}

export default MenuContainer