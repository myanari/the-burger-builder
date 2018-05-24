import React, { Component } from 'react';
import validator from 'validator';
import axios from '../../../axios-orders';

import styles from './CustomerData.css';
import Input from '../../../components/UI/Input/Input';
import Spinner from '../../../components/UI/Spinner/Spinner';
import Button from '../../../components/UI/Button/Button';

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
        valid: false
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
        valid: false
      },
      zipcode: {
        elementType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'ZIP Code'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
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
        valid: false
      },
      email: {
        elementType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your E-Mail'
        },
        value: '',
        validation: {
          required: true
        },
        valid: false
      },
      deliveryMethod: {
        elementType: 'select',
        elementConfig: {
          options: [
            {value: 'fastest', displayValue: 'Fastest'},
            {value: 'cheapest', displayValue: 'Cheapest'}
          ]
        },
        value: ''
      },
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true});
    const formData = {};

    for (let formElementId in this.state.orderForm) {
      formData[formElementId] = this.state.orderForm[formElementId].value;
    }

    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      orderData: formData
    }
    axios.post('/orders.json', order)
      .then(res => {
        this.setState({ loading: false });
        this.props.history.push('/orders');
      })
      .catch(err => {
        this.setState({ loading: false });
      })
  }

  checkValidity(value, rules) {
    let isValid = true;
    if (rules.required) {
      isValid = validator.trim(value) !== '' && isValid;
    }
    if (rules.postal) {
      isValid = validator.isPostalCode(validator.trim(value)) && isValid;
    }
    if (rules.email) {
      isValid = validator.isEmail(validator.trim(value)) && isValid;
    }
    return isValid;
  }

  inputChangedHandler = (event, inputId) => {
    const updatedOrderForm = { ...this.state.orderForm };
    const updatedFormEl = { ...updatedOrderForm[inputId] };
    updatedFormEl.value = event.target.value;
    updatedFormEl.valid = this.checkValidity(updatedFormEl.value, updatedFormEl.validation);
    console.log(updatedFormEl);
    updatedOrderForm[inputId] = updatedFormEl;
    this.setState({orderForm: updatedOrderForm});
  }

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
        {formElements.map(el => (
          <Input
            key={el.id}
            elementType={el.config.elementType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
            invalid={!el.config.valid}
            shouldValidate={el.config.validation}
            changed={(event) => this.inputChangedHandler(event, el.id)} />
        ))}
        <Button btnType="buttonAction">Submit</Button>
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

export default CustomerData;