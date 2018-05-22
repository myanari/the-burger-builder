import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import Checkout from './containers/Checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './components/Layout/Layout';

class App extends Component {
	render() {
    return (
      <Layout>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/checkout' component={Checkout} />
      </Layout>
    );
  }
}

export default App;
