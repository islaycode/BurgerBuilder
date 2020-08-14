import React from 'react';
import './NavigationItems.css';
import NavigationItem from '../navigationItem/NavigationItem'

const NavigationItems = () => (
    <ul className="NavigationItems">
        <NavigationItem link ="/" active>Burger Builder </NavigationItem>
        <NavigationItem link ="/">Checkout </NavigationItem>
    </ul>
)

export default NavigationItems;