import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

import * as actions from './store/actions';

import Orders from './containers/Orders/Orders';
import Checkout from './containers/Checkout/Checkout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Layout from './components/Layout/Layout';
import Auth from './containers/Auth/Auth';
import Logout from "./containers/Auth/Logout/Logout";

class App extends Component {
  componentDidMount() {
    this.props.onTryAutoSignup();
  }

	render() {
    let routes = (
      <Switch>
        <Route path='/' exact component={BurgerBuilder} />
        <Route path='/auth' component={Auth} />
        <Redirect to='/' />
      </Switch>
      );

    if (this.props.isAuthenticated) {
      routes = (
        <Switch>
          <Route path='/' exact component={BurgerBuilder} />
          <Route path='/orders' component={Orders} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/logout' component={Logout} />
					<Redirect to='/' />
        </Switch>
      );
    }

    return <Layout>{ routes }</Layout>;
  }
}

const mapStateToProps = state => {
  return {
    isAuthenticated: state.auth.token !== null
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch(actions.authCheckState())
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
