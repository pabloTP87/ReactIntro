import React, { Component } from 'react';

class TaskForm extends Component {

    state = {
        title: '',
        description: ''
    }

    onSubmit = e => {
        console.log(this.state)
        e.preventDefault();
        this.props.addTask(this.state.title, this.state.description)
    }

    onChange = e => {
        console.log(e.target.name, e.target.value)
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input 
                    type = "text" 
                    placeholder = "Ingresa el titulo de la tarea"
                    onChange = {this.onChange}
                    value = {this.state.title}
                    name = "title"/>
                <br/>
                <textarea 
                    type = "text" 
                    placeholder = "Ingresa una descripción"
                    onChange = {this.onChange}
                    value = {this.state.description}
                    name = "description"/>
                <br/>
                <button type = "submit">Send a task</button>
            </form>
        )
    }
}

export default TaskForm;