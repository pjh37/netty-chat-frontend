import React,{Component,useState,useEffect} from 'react';
import ReactDOM from 'react-dom';
import {Route,BrowserRouter as Router} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import LoginCallback from "./components/LoginCallback";
import ChatContainer from "./components/ChatContainer";
import Job from "./components/contents/Job";
import Algorithm from "./components/contents/Algorithm";
import RealTimeChat from "./components/contents/RealTimeChat";
import Board from "./components/contents/Board";
import Error from "./components/Error";

function App(){
  const [authenticated,setAuthenticated]=useState(false)
  
  

  return (
    <Router>
      <Header authenticated={authenticated}/>
       
      <Route exact path="/" component={Content}/>
      <Route path='/job' component={Job} />
      <Route path='/algorithm' component={Algorithm} />
      <Route path='/realtimechat' component={RealTimeChat} />
      <Route path='/board' component={Board} />
      <Route path="/error" component={Error}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={SignUp} />
      <Route path="/rooms/:room_id" component={ChatContainer} />
      <Route path="/login/oauth2/code/:registrationId" render={(props)=><LoginCallback authenticated={authenticated} {...props}/>}/>
    </Router>
  )
}

export default App;
