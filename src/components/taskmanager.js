import React, {Component} from "react";
import Task from "./task"
import { today, currentMonth, localTime } from "./time";

class TaskManager extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks: [],
            value:""
        }
        this.addTasks = this.addTasks.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
        this.deleteTask = this.deleteTask.bind(this)
        this.updateTaskStatus = this.updateTaskStatus.bind(this)
    }


    addTasks(){
        this.setState({
            tasks:[{title:this.state.value,done:false, time: localTime()}, ...this.state.tasks] ,
            value:""
        })
    }
    
    handleChange(e){
        console.log(e.target.value)
        this.setState({value:e.target.value})
    }

    
    handleKeyDown(e){
        console.log(e.which)
        if(e.which===13 && this.state.value.trim().length>0){
            this.addTasks()
        }
    }

    deleteTask(index){
        this.setState((state)=>{
            let updatedTasks = state.tasks.filter((el, i)=>{
                return i!=index;
            })
            return {tasks: updatedTasks}
        })
     }
     updateTaskStatus(status, index){
        console.log(status);
        console.log(index);
        this.setState((state)=>{
            let updatedTasks = state.tasks.map((el, i)=>{
                if(i === index){
                    el.done = status
                }
                return el;
            })
            return {tasks: updatedTasks}
        })
    }
    render(){

        let tasks = this.state.tasks;
        let completedTasks = tasks.filter(el=>{
            return (el.done==true)
        })

        let tasklist = tasks.map((el, i)=> {
            return (
                <Task key={i} data-index={i} item={el} deleteTask={this.deleteTask} onChange={this.updateTaskStatus}/>
            )
        });
        return (
            <div>
                <h1>Task Manager ({completedTasks.length}/{tasks.length})</h1>
                <p id="date"> {currentMonth()} {today()}</p>
                   

                <input type="text" placeholder="Add Tasks Title" value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
                <button className="add" onClick={this.addTasks}>+</button>
                {tasks.length>0?tasklist: <p>No tasks, add some Tasks</p>}
            {/* {
                this.state.tasks.map(el=> {
                    return <Task item={el} />
                })
            } */}
            </div>
        )
    }
}

export default TaskManager;