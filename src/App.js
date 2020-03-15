import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import './App.css';
import tasks from './sample/tasks.json';
import Tasks from './components/Tasks.js';
import TaskForm from './components/TaskForm.js';
import Post from './components/Post.js';

class App extends Component {

  state = {
    tasks: tasks
  }

  addTask = (title, description) => {
    const  newTask = {
      title: title,
      description: description,
      id: this.state.tasks.length
    }

    this.setState({
      tasks: [...this.state.tasks, newTask]
    })
  }

  deleteTask = (id) => {
    const delTask =  this.state.tasks.filter(task => task.id !== id);
    this.setState({tasks: delTask})
  }

  checkDone = (id) => {
    const done = this.state.tasks.map(task => {
      if(task.id === id){
        task.done = !task.done
      }
      return task;
    });
    this.setState({tasks: done})
  }
  

  render(){
    return <div>
      <Router>
          <Link to = "/">Home</Link>
          <br/>
          <Link to = "/post">Post</Link>
        <Route exact path = "/" render={() =>{
          return <div>
            <TaskForm addTask = {this.addTask}/>
            <Tasks tasks = {this.state.tasks} deleteTask = {this.deleteTask} checkDone = {this.checkDone}/>
          </div>
        }}>
        </Route>
        <Route path = "/post" component = {Post}/>
      </Router>
      </div>
  }
}

export default App;