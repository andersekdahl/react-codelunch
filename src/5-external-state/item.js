import React from 'react';
import store from './store';

export default ({todo}) => {
  const styles = {};
  if (todo.isComplete) {
    styles.fontStyle = 'italic';
    styles.color = '#ccc';
  }
  return (
    <li style={styles}>
      <input type='checkbox' checked={todo.isComplete} onChange={() => store.toggleComplete(todo)} />
      {todo.text}
      <button onClick={() => store.remove(todo)}>Delete</button>
    </li>
  );
};
