import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter,Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";
import Login from "./components/Login";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Route exact path="/"><Content></Content></Route>
        <Route exact path="/login"><Login></Login></Route>
      </div>
    )

  };
}

export default App;
