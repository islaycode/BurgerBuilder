import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredients/BurgerIngredient'

export const Burger = (props) => {
    
    let transformIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return[...Array(props.ingredients[igKey])].map((_,i)=>{
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        },[]);
        console.log(transformIngredients);
       
        if(transformIngredients.length === 0) {
            transformIngredients = <p>Start Building Your Bugrer Now!</p>
        }
        return (
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default Burger;