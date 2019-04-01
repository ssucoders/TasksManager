import React, {Component} from "react";
import Task from "./task"

class TaskManager extends Component{
    constructor(props){
        super(props);
        this.state={
            tasks: [{title:"a task", done: true}, {title:"another", done: false}],
            value:""
        }
        this.addTasks = this.addTasks.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this)
    }


    addTasks(){
        this.setState({
            tasks:[{title:this.state.value,done:false}, ...this.state.tasks] ,
            value:""
        })
    }
    
    handleChange(e){
        console.log(e.target.value)
        this.setState({value:e.target.value})
    }

    
    handleKeyDown(e){
        console.log(e.which)
        if(e.which===13){
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
                <input type="text" value={this.state.value} onKeyDown={this.handleKeyDown} onChange={this.handleChange}/>
                <button>+</button>
            {
                this.state.tasks.map(el=> {
                    return <Task item={el} />
                })
            }
            </div>
        )
    }
}

export default TaskManager;