import React, { Component} from "react";
import {hot} from "react-hot-loader";
import "./App.css";
import TaskManger from "./components/taskmanager";

class App extends Component{
  constructor(props){
    super(props);
    // this.state = {name: "saif"}
    // this.handleChange = this.handleChange.bind(this);
  }

  // handleChange(e) {
  //   this.setState({
  //     name: e.target.value
  //   })
  // }
  
  render(){
    return(
      <div className="App">
        <TaskManger />
      </div>
    );
  }
}

export default hot(module)(App);