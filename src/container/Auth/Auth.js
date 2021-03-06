import React, { Component } from "react";
import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';

class Auth extends Component {
  state = {
    controls: {
      email: {
        elementType: "input",
        elementConfig: {
          type: "email",
          placeholder: "Your Name Email",
        },
        value: '',
        validation: {
          required: true,
          isEmail: true
        },
        valid: false,
        touched: false
      },
      password: {
        elementType: 'input',
        elementConfig: {
            type: 'password',
            placeholder: 'Your Password'
        },
        value: '',
        validation: {
          required: true,
          minLength: 6
        },
        valid: false,
        touched: false
    },
    },
  };
  render() {
    const formElementsArray = [];
    for(let key in this.state.orderForm){
        formElementsArray.push({
            id: key,
            config: this.state.orderForm[key]
        });
    }
    return (
      <div>
        <form>
            <Input/>
            <Button/>
        </form>
      </div>
    );
  }
}

export default Auth;
