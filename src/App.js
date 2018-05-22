import React, { Component, Fragment } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from './containers/Checkout/Checkout';

class App extends Component {
	render() {
    return (
      <Fragment>
        <Layout>
          <BurgerBuilder />
          <Checkout />
        </Layout>
      </Fragment>
    );
  }
}

export default App;
