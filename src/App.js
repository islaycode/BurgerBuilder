import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Layout from './components/layout/Layout'
import BurgerBuilder from './container/BurgerBuilder/BurgerBuilder';
import Checkout from './container/Checkout/Checkout';
import Orders from './container/Orders/Orders'

class App extends Component{
  
  render(){
    return (
      <div>
      <Layout>
        <Route path="/" exact component={BurgerBuilder}/>
        <Route path="/orders" component={Orders}/>
        <Route path="/checkout" component={Checkout}/>
      </Layout>
      </div>
    );
  }
  
}

export default App;
