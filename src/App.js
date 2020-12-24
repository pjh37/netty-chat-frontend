import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Content from "./components/Content";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Content></Content>
      </div>
    )

  };
}

export default App;
