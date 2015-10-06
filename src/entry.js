import './styles/generic.scss';
import './styles/base.scss';

import React from 'react';
import ReactDOM from 'react-dom';

// import Component from './1-hello-world';
// import Component from './2-counter';
// import Component from './3-parent-child';
import Component from './4-todo-list';
// import Component from './5-external-state';

let container = document.body.insertBefore(document.createElement('div'), document.body.firstChild);

ReactDOM.render(<Component />, container);
