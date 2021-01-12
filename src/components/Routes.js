import React,{Component} from 'react';
import {BrowserRouter as Router,Route} from 'react-router-dom';
import ChatContainer from './ChatContainer';
import RoomListContainer from './RoomListContainer';
import PagingList from './PagingList';
import Content from "./Content";
import Login from "./Login";
import SignUp from "./SignUp";
import LoginCallback from "./LoginCallback";
import Error from "./Error";
class Routes extends Component{
    render(){
        return (
            <Router>
                
            </Router>
        );
    }
}

export default Routes