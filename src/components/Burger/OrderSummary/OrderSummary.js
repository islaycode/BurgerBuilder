import React, {Component,Fragment} from 'react';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {
    UNSAFE_componentWillUpdate(){
        console.log('[OrderSUmmary] will update')
    }
    render(){
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
        return (
        <li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
            </li>)
        })
        return (
            <Fragment>
            <h3>Your Order!</h3>
            <p>Delicious Burger with the following ingredients:</p>
            <ul>
            {ingredientSummary}
        </ul>
        <p><strong>Total Price: {this.props.price}</strong></p>
        <p>Continue to Checkout!</p>
        <Button btnType="Danger" clicked={this.props.purchaseCanclled}>CANCEL</Button>
        <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Fragment>      
        )
        }
    }

export default OrderSummary;