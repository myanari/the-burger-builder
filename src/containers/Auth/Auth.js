import React, { Component } from 'react';
import { connect } from 'react-redux';
import validator from 'validator';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import styles from './Auth.css';
import * as actions from '../../store/actions';

class Auth extends Component {
	state = {
		controls: {
			email: {
				elementType: 'input',
				elementConfig: {
					type: 'email',
					placeholder: 'Mail Address'
				},
				value: '',
				valid: false,
				touched: false,
				validation: {
					required: true,
					email: true
				}
			},
			password: {
				elementType: 'input',
				elementConfig: {
					type: 'password',
					placeholder: 'Your password'
				},
				value: '',
				valid: false,
				touched: false,
				validation: {
					required: true,
					password: true
				}
			}
		}
	};

	static checkValidity(value, rules) {
		let isValid = true;
		if (rules) {
			if (rules.required) {
				isValid = validator.trim(value) !== '' && isValid;
			}
			if (rules.email) {
				isValid = validator.isEmail(validator.trim(value)) && isValid;
			}
			if (rules.password) {
				isValid = validator.isLength(validator.trim(value), {min: 6}) && isValid;
			}
		}
		return isValid;
	}

	inputChangedHandler = (event, controlName) => {
		const updatedControls = {
			...this.state.controls,
			[controlName]: {
				...this.state.controls[controlName],
				value: event.target.value,
				valid: Auth.checkValidity(event.target.value, this.state.controls[controlName].validation),
				touched: true
			}
		};
		this.setState({controls: updatedControls});
	};

	onSubmitHandler = (event) => {
		event.preventDefault();
		this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value);
	};

	render() {
		const formElements = [];
		for (let key in this.state.controls) {
			formElements.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		const form = formElements.map(el => (
			<Input
				key={el.id}
				elementType={el.config.elementType}
				elementConfig={el.config.elementConfig}
				value={el.config.value}
				invalid={!el.config.valid && el.config.touched}
				shouldValidate={el.config.validation}
				changed={(event) => this.inputChangedHandler(event, el.id)} />
		));
		return (
			<div className={styles.Auth}>
				<form onSubmit={this.onSubmitHandler}>
					{form}
					<Button btnType="buttonAction">Submit</Button>
				</form>
			</div>
		);
	}
}

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password) => dispatch(actions.auth(email, password))
	};
};

export default connect(null, mapDispatchToProps)(Auth);