import React, { Component, Fragment } from 'react';
import Modal from '../../components/UI/Modal/Modal';

const withErrorHandler = (WrappedComponent, axios) => {
  return class extends Component {
    state = {
      error: null
    }
    componentDidMount() {
      axios.interceptors.response.use(request => {
        this.setState({error: null});
        return request;
      })

      axios.interceptors.response.use(res => res, error => {
        this.setState({error: error});
      });
    }

    errorConfirmedHandler = () => {
      this.setState({error: null})
    }

    render() {
      return (
        <Fragment>
          <Modal show={this.state.error} leaveBackdrop={this.errorConfirmedHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
          <WrappedComponent {...this.props} />
        </Fragment>
      );
    }
  }
}

export default withErrorHandler;