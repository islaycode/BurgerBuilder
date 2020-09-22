import React, { Component } from "react";
import Button from "../../../components/UI/Button/Button";
import "./ContactData.css";
import axios from "../../../axios-order";
import Spinner from "../../../components/UI/spinner/Spinner";
import Input from "../../../components/UI/Input/Input";
import { connect } from 'react-redux'

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
          elementType: 'input',
          elementConfig: {
              type: 'text',
              placeholder: 'Your Name'
          },
          value: '',
          validation: {
            required: true,
          },
          valid: false,
          touched: false
      },

      street: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Your Street'
        }
    },
      zipcode: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Zip Code'
        }
    },
      country: {
        elementType: 'input',
        elementConfig: {
            type: 'text',
            placeholder: 'Country'
        }
    },
      email: {
        elementType: 'input',
        elementConfig: {
            type: 'email',
            placeholder: 'Your Email'
        }
    },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
            options: [
                {value: 'fastest', displayValue:'Fastest'},
                {value:'cheapest', displayValue:'Cheapest'}
            ],
            
        }
    },
    },
    loading: false,
  };
  orderHandler = (e) => {
    e.preventDefault();
    this.setState({ loading: true });
    const formData = {}
        for(let formElementIdentifier in this.state.orderForm){
            formData[formElementIdentifier] = this.state.orderForm[formElementIdentifier].value;
        }
    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData
    };
    axios
      .post("/orders.json", order)
      .then((res) => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  };

  render() {
    const formElementsArray = [];
    for(let key in this.state.orderForm){
        formElementsArray.push({
            id: key,
            config: this.state.orderForm[key]
        });
    }
    let form = (
        
      <form onSubmit={this.orderHandler}>
          {formElementsArray.map(formElement=>(
             <Input 
             key={formElement.id} 
             elementType={formElement.config.elementType} 
             elementConfig={formElement.config.elementConfig}
             value={formElement.config.value}/>
            ))}
         
        <Button btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className="ContactData">
        <h4>Enter Your Contact</h4>
        {form}
      </div>
    );
  }
}
const mapStateToProps =state=>{
    return {
      ings: state.ingredients,
      price: state.totalPrice
    }
}
export default connect(mapStateToProps)(ContactData)