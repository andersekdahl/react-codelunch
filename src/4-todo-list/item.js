import React from 'react';

export default ({todo, onToggle, onDelete}) => {
  const styles = {};
  if (todo.isComplete) {
    styles.fontStyle = 'italic';
    styles.color = '#ccc';
  }
  return (
    <li style={styles}>
      <input type='checkbox' checked={todo.isComplete} onChange={onToggle} />
      {todo.text}
      <button onClick={onDelete}>Delete</button>
    </li>
  );
};
