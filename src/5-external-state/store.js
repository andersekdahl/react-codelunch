import React from 'react';

let todos = [
  {id: 1, text: 'Buy tomatoes', isComplete: false},
  {id: 2, text: 'Clean the house', isComplete: false},
  {id: 3, text: 'Take over the world', isComplete: false},
  {id: 4, text: 'Learn React', isComplete: true},
];
let listeners = [];

const callListeners = () => listeners.forEach(l => l(todos));

export default {
  todos,
  add(text) {
    todos.push({
      id: Math.random(),
      text,
      isComplete: false
    });
    callListeners();
  },
  remove(todo) {
    todos = todos.filter(t => t.id !== todo.id);
    callListeners();
  },
  toggleComplete(todo) {
    todos = todos.map(t => {
      if (t.id === todo.id) {
        t.isComplete = !t.isComplete;
      }
      return t;
    });
    callListeners();
  },
  createWrapperComponent(Component) {
    return class WrappedComponent extends React.Component {
      constructor(props) {
        super(props);
        this.state = {
          todos
        };
        listeners.push(() => this.setState({todos}));
      }
      render() {
        return <Component todos={this.state.todos} />;
      }
    };
  }
};
