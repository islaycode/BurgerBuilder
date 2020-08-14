import React from 'react'
import './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad 30rs', type : 'salad'},
    { label: 'Bacon 50rs', type : 'bacon'},
    { label: 'Cheese 20rs', type : 'cheese'},
    { label: 'Chicken 50rs', type : 'meat'}
]
export const BuildControls = (props) => (
        <div className="BuildControls"> 
        <p>Current Price: <strong>{props.price}rs.</strong></p>
            {controls.map(cntrl => (
                <BuildControl 
                key={cntrl.label} 
                label={cntrl.label}
                added={()=> props.ingredientAdded(cntrl.type)}
                removed ={()=> props.ingredientRemoved(cntrl.type)}
                disabled={props.disabled[cntrl.type]}
                />
            ))}
             <button className="OrderButton" 
             disabled={!props.purchasable}
             onClick={props.ordered}
             >Checkout</button>
        </div>
       
)
export default BuildControls;