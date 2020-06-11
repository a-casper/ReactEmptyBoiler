import React from 'react';
import axios from 'axios';
import InputBar from './components/InputBar.jsx';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }

    this.getAllTodos = this.getAllTodos.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    this.getAllTodos();
  }

  getAllTodos() {
    axios.get('/getAll').then(({data}) => {
      console.log(data);
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

  render() {
    return (
      <>
        <h1>TodoList</h1>
        <InputBar value={this.state.inputValue} handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
      </>
    )
  }
}