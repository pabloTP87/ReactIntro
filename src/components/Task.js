import React, { Component } from 'react';
import '../App.css'
import Proptypes from 'prop-types';

class Task extends Component{

    //función con objeto que contiene estilos css
    styledCompleted() {
        return{
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

    render(){

        //color estilos para el boton
        const back = {background: 'blue', border: 'none', borderRadius: '5px'};

        const {task} = this.props;

        return <div style = {this.styledCompleted()}>
            {task.id} -  
            {task.title} -  
            {task.description} - 
            <input type= "checkbox" onChange = {this.props.checkDone.bind(this, task.id)}></input>
            <button style = {back} onClick = {this.props.deleteTask.bind(this, task.id)}>x</button>
        </div>
    }
}

Task.propTypes = {
    task: Proptypes.object.isRequired
}

export default Task;