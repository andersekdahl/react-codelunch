import React from 'react';

export default ({text, onDismiss}) => (
  <div className='error'>
    <p>{text}</p>
    <button onClick={onDismiss}>Dismiss</button>
  </div>
);

// export default (props) => {
//   const text = props.text;
//   const onDismiss = props.onDismiss;
//   return (
//     <div className='error'>
//       <p>{text}</p>
//       <button onClick={onDismiss}>Dismiss</button>
//     </div>
//   );
// };
