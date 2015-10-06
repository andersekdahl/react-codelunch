import React from 'react';

import store from './store';
import TodoItem from './item';

export default store.createWrapperComponent(class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newTodoText: ''
    };
  }
  render() {
    return (
      <div>
        <h1>Todos</h1>
        <ul>
          {this.props.todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
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
            onClick={() => store.add(this.state.newTodoText)}
            disabled={this.state.newTodoText === ''}
          >Add</button>
        </div>
      </div>
    );
  }
});
