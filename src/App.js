import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions';

import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Logout from "./containers/Auth/Logout/Logout";

class App extends Component {
  componentWillMount() {
    this.props.onTryAutoSignup();
  }

	render() {
    return (
      <Layout>
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/orders' component={Orders} />
        <Route path='/checkout' component={Checkout} />
        <Route path='/auth' component={Auth} />
        <Route path='/logout' component={Logout} />
      </Switch>
      </Layout>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
};

export default withRouter(connect(null, mapDispatchToProps)(App));
