import React,{Component} from 'react';
import {myWebsocket} from '../util/WebSocket.js';

function RoomCreateModal(){

    const handleRoomCreate=(e)=>{
        myWebsocket.roomCreate()
    }

    return (
        <div class="modal fade" id="roomCreateModal" tabindex="-1" aria-labelledby="roomCreateModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="roomCreateModalLabel">채팅방 생성</h5>
                        <button type="button" class="btn-close" data-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="recipient-name" class="col-form-label">제목</label>
                                <input type="text" class="form-control" id="room-name" />
                            </div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">취소</button>
                        <button type="button" class="btn btn-primary" id="btn-room-create" onClick={handleRoomCreate}>생성</button>
                    </div>
                </div>
            </div>
        </div>
    )
    
}

export default RoomCreateModal