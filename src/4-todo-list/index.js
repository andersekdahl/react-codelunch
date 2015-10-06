import React from 'react';

import TodoItem from './item';

export default class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        {id: 1, text: 'Buy tomatoes', isComplete: false},
        {id: 2, text: 'Clean the house', isComplete: false},
        {id: 3, text: 'Take over the world', isComplete: false},
        {id: 4, text: 'Learn React', isComplete: true},
      ],
      newTodoText: ''
    };
  }
  toggleTodo(todo) {
    const todos = this.state.todos.map(t => {
      if (t.id === todo.id) {
        t.isComplete = !t.isComplete;
      }
      return t;
    });
    this.setState({todos});
  }
  addTodo() {
    const todos = this.state.todos;
    todos.push({
      text: this.state.newTodoText,
      isComplete: false,
      id: Math.random()
    });
    this.setState({
      todos,
      newTodoText: ''
    });
  }
  deleteTodo(todo) {
    const todos = this.state.todos.filter(t => t.id !== todo.id);
    this.setState({todos});
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.state.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onToggle={() => this.toggleTodo(todo)}
              onDelete={() => this.deleteTodo(todo)}
            />
          ))}
        </ul>
        <div>
          <h2>Add todo</h2>
          <input
            type='text'
            value={this.state.newTodoText}
            onChange={e => this.setState({newTodoText: e.target.value})}
          />
          <button
            onClick={() => this.addTodo()}
            disabled={this.state.newTodoText === ''}
          >Add</button>
        </div>
      </div>
    );
  }
}
