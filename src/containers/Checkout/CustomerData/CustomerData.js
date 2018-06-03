import React, { Component } from 'react';
import validator from 'validator';
import axios from '../../../axios-orders';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions'

import styles from './CustomerData.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';
import withErrorHandler from '../../../hoc/withErrorHandler/withErrorHandler';

class CustomerData extends Component {
  state = {
    orderForm: {
      name: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      street: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Street'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true,
          postal: true
        },
        valid: false,
        touched: false
      },
      country: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Country'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false,
        touched: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true,
          email: true
        },
        valid: false,
        touched: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: 'fastest',
        valid: true
      },
    },
    loading: false,
    formIsValid: false
  };

  orderHandler = (event) => {
    event.preventDefault();
    const formData = {};

    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }

    const order = {
      ingredients: this.props.ings,
      price: this.props.price,
      orderData: formData
    };

    this.props.onOrderBurger(order);
  };

  checkValidity(value, rules) {
    let isValid = true;
    if (rules) {
      if (rules.required) {
        isValid = validator.trim(value) !== '' && isValid;
      }
      if (rules.postal) {
        isValid = validator.isPostalCode(validator.trim(value + ''), 'any') && isValid;
      }
      if (rules.email) {
        isValid = validator.isEmail(validator.trim(value)) && isValid;
      }
    }
    return isValid;
  }

  inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormEl = { ...updatedOrderForm[inputId] };

    updatedFormEl.value = event.target.value;
    updatedFormEl.valid = this.checkValidity(updatedFormEl.value, updatedFormEl.validation);
    updatedFormEl.touched = true;
    updatedOrderForm[inputId] = updatedFormEl;

    let formIsValid = true;
    
    for (let inputIdentifier in updatedOrderForm) {
      formIsValid = updatedOrderForm[inputIdentifier].valid && formIsValid;
    }

    this.setState({orderForm: updatedOrderForm, formIsValid: formIsValid});
  };

  render() {
    const formElements = [];
    for(let key in this.state.orderForm) {
      formElements.push({
        id: key,
        config: this.state.orderForm[key]
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {
          formElements.map(el => (
          <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
            invalid={!el.config.valid && el.config.touched}
            shouldValidate={el.config.validation}
            changed={(event) => this.inputChangedHandler(event, el.id)} />
          ))
        }
        <Button btnType="buttonAction" disabled={!this.state.formIsValid}>Submit</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner dark />;
    }
    return(
      <div className={styles.CustomerData}>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    price: state.burgerBuilder.totalPrice
  }
};

const mapDispatchToProps = dispatch => {
  return{
    onOrderBurger: (orderData) => dispatch(actions.purchaseBurger(orderData))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(CustomerData, axios));