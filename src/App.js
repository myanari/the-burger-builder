import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './components/Layout/Layout';

class App extends Component {
	render() {
    return (
      <Layout>
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/orders' component={Orders} />
        <Route path='/checkout' component={Checkout} />
      </Switch>
      </Layout>
    );
  }
}

export default App;
