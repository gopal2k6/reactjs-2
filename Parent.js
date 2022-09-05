import * as React from 'react';
import './style.css';

export default class Parent extends React.Component {
  constructor(props) {
    super(props);

    this.state = { message: 'This is test Message', sub: 'Subscribe' };
  }

  changeButton = () => {
    this.setState(
      (this.state = {
        message: 'OK Clicked ON the Button',
        sub: 'Subscribe123',
      })
    );
  };

  render() {
    return (
      <div>
        <h1>Hello StackBlitz!</h1>
        <p>Start editing to see some magic happen :)</p>
        <p>{this.state.message}</p>
        <button onClick={this.changeButton}>{this.state.sub}</button>
      </div>
    );
  }
}
