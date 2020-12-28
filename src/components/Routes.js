import React,{Component} from 'react';
import {Router,Route} from 'react-router-dom';
import ChatContainer from './ChatContainer';
import RoomListContainer from './RoomListContainer';
import PagingList from './PagingList';

class Routes extends Component{
    render(){
        return (
            <Router>
                <Route path="/rooms/:room_id" component={ChatContainer}/>
            </Router>
        );
    }
}

export default Routes