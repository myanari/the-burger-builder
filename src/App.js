import React, { Component, Fragment } from 'react';
import Layout from './components/Layout/Layout';

class App extends Component {
  render() {
    return (
      <Fragment>
        <Layout>
          <h1>Hello World</h1>
        </Layout>
      </Fragment>
    );
  }
}

export default App;
