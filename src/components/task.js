import React,{Component} from "react";

class Task extends Component{
    constructor(props){
        super(props);
        this.removeTask = this.removeTask.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    
    handleChange(e){
        this.props.onChange(e.target.checked, this.props["data-index"]);
     }

    removeTask(e){
        this.props.deleteTask(this.props["data-index"]);
     }
    render(){
        return(
            <div  className = {this.props.item.done?"task task-done":"task"}>
                <input type="checkbox" checked={this.props.item.done} onChange={this.handleChange} />
                {this.props.item.title}
                <button className="del" onClick = {this.removeTask}>X</button>
                <small>{this.props.item.time}</small>
            </div>
        )
    }
}

export default Task;