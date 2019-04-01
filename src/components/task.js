import React,{Component} from "react";

class Task extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div  className = {this.props.item.done?"task-done":""}>
                <input type="checkbox" checked={this.props.item.done} />
                {this.props.item.title}
                <button>X</button>
            </div>
        )
    }
}

export default Task;