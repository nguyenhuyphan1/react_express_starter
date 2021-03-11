import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {isOn: true};
  }
  buttonClick = () => {
      this.setState(prevState => (
          {
              isOn: !prevState.isOn
          }
      ));
  }
}
  <button className Button> Add </button>;
export default Button;


