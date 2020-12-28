import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <Route exact path="/" component={Content}></Route>
        <Route exact path="/login" component={Login}/>
        <Route path="/signup" component={SignUp}/>
      </div>
    )

  };
}

export default App;
