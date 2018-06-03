import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import validator from 'validator';

import Input from '../../components/UI/Input/Input';
import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
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
		},
		isSignup: true
	};

	componentDidMount() {
		if (!this.props.building && this.props.authRedirectPath !== '/') {
			this.props.onSetAuthRedirectPath();
		}
	}

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
		this.props.onAuth(this.state.controls.email.value, this.state.controls.password.value, this.state.isSignup);
	};

	switchAuthModeHandler = () => {
		this.setState(prevState => {
			return { isSignup: !prevState.isSignup };
		});
	};

	render() {
		const formElements = [];
		for (let key in this.state.controls) {
			formElements.push({
				id: key,
				config: this.state.controls[key]
			});
		}

		let form = formElements.map(el => (
			<Input
				key={el.id}
				elementType={el.config.elementType}
				elementConfig={el.config.elementConfig}
				value={el.config.value}
				invalid={!el.config.valid && el.config.touched}
				shouldValidate={el.config.validation}
				changed={(event) => this.inputChangedHandler(event, el.id)} />
		));

		let errorMessage = null;

		if (this.props.error) {
			errorMessage = (
				<p style={{color: '#f44336'}}>{this.props.error.message}</p>
			);
		}

		let authRedirect = null;
		if (this.props.isAuthenticated) {
			authRedirect = <Redirect to={this.props.authRedirectPath} />
		}

		let showing = (
			<div>
				<h1>{ !this.state.isSignup ? 'LOGIN' : 'SIGNUP' }</h1>
				{ errorMessage }
				<form onSubmit={this.onSubmitHandler}>
					{ form }
					<Button btnType="buttonAction">Submit</Button>
				</form>
				<Button
					clicked={this.switchAuthModeHandler}
					btnType="buttonCaution">SWITCH TO { this.state.isSignup ? 'LOGIN' : 'SIGNUP' }</Button>
			</div>
		);

		if (this.props.loading) {
			showing = <Spinner dark />
		}

		return (
			<div className={styles.Auth}>
				{authRedirect}
				{showing}
			</div>
		);
	}
}

const mapStateToProps = state => {
	return {
		loading: state.auth.loading,
		error: state.auth.error,
		isAuthenticated: state.auth.token !== null,
		building: state.burgerBuilder.building,
		authRedirectPath: state.auth.authRedirectPath
	}
};

const mapDispatchToProps = dispatch => {
	return {
		onAuth: (email, password, isSignup) => dispatch(actions.auth(email, password, isSignup)),
		onSetAuthRedirectPath: () => dispatch(actions.setAuthRedirectPath('/'))
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);