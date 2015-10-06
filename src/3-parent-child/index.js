import React from 'react';

import Alert from './alert';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
      errorText: ''
    };
  }
  onTriggerError() {
    let errorText = 'An error occured';
    if (this.state.hasError) {
      errorText = 'Ow noes! A new error occured';
    }
    this.setState({
      hasError: true,
      errorText
    });
  }
  dismissError() {
    this.setState({
      hasError: false
    });
  }
  render() {
    return (
      <div>
        <button onClick={() => this.onTriggerError()}>Trigger error</button>
        {this.state.hasError && (
          <Alert
            text={this.state.errorText}
            onDismiss={() => this.dismissError()}
          />
        )}
      </div>
    );
  }
}
