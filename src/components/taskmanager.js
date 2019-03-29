import React, {Component} from "react";
import Task from "./task"

class TaskManager extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
        <div>
            <h1>Task Manager</h1>
            <input type="text"/>
        </div>
        )
    }
}

export default TaskManager;