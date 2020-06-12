import React from 'react';
import axios from 'axios';
import InputBar from './components/InputBar.jsx';
import List from './components/List.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      todos: []
    }

    this.getAllTodos = this.getAllTodos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    axios.get('/getAll').then(({data}) => {
      this.setState({
        todos: data
      })
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/submitTodo', {
      task: this.state.inputValue
    }).then(() => {
      this.getAllTodos()
      this.setState({
        inputValue: ''
      });
    }).catch((err) => {
      console.log('Error submitting Todo:', err);
    })
  }

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  handleDelete(e, id) {
    console.log("Delete this one:", id);
    axios.delete('/deleteTodo', {
      params: { id: id }
    }).then(response => {
      this.getAllTodos()
    }).catch(err => {
      console.log(err);
    })
  }

  handleUpdate(e, todo) {
    let newTask = prompt('Please Enter the new task information:')
    console.log("Update this one:", todo);
    axios.put('/updateTodo', {
      id: todo.id,
      task: newTask
    }).then(results => {
      this.getAllTodos();
    }).catch(err => {
      console.log(err);
    })
  }

  render() {
    return (
      <>
        <h1>TodoList</h1>
        <InputBar value={this.state.inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
        <List todos={this.state.todos} handleUpdate={this.handleUpdate} handleDelete={this.handleDelete}/>
      </>
    )
  }
}