import React from 'react';
import Burger from '../../Burger/Burger';
import Button from '../../UI/Button/Button';
import './CheckoutSummary.css';

const checkoutSummary =(props)=> {
    return (
        <div className="CheckoutSummary">
            <h1>It going to be Amazing!</h1>
            <div style={{ width: '100%', margin: 'auto' }}></div>
            <Burger ingredients={props.ingredients}/>
            <Button 
            clicked={props.checkoutCancelled}
            btnType="Danger">CANCEL</Button>
            <Button 
            clicked={props.checkoutContinued}
            btnType="Success">CONTINUE</Button>
        </div>
    )
}

export default checkoutSummary;