import React from 'react';

export default class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 1
    };

    setInterval(() => this.setState({counter: this.state.counter + 1}), 1000);
  }
  render() {
    return (
      <div>Counter: {this.state.counter}</div>
    );
  }
}
