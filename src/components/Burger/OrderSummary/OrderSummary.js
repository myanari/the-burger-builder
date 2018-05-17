import React, { Component, Fragment } from 'react';
import Button from '../../UI/Button/Button';
import cssCl from './OrderSummary.css';

class OrderSummary extends Component {
	componentWillUpdate() {
		console.log('[OrderSummary] will update');
	}
  render() {
		const ingredientSummary = Object.keys(this.props.ingredients)
			.map(ingKey => {
				return (
					<li key={ingKey}>
						<span style={{textTransform: 'capitalize'}}>{ingKey}</span>: {this.props.ingredients[ingKey]}
					</li>);
			});

		return (
			<Fragment>
				<h3>Your order</h3>
				<p>A burger with the following ingredients:</p>
				<ul>{ingredientSummary}</ul>
				<div className={cssCl.Card}>
					<p>Total: US$ {this.props.price.toFixed(2)}</p>
				</div>
				<p>Continue with checkout?</p>
				<Button
					btnType="buttonCaution"
					clicked={this.props.canceled}><i className="fa fa-repeat"/></Button>
				<Button
					btnType="buttonAction"
					clicked={this.props.continue}><i className="fa fa-check"/></Button>
			</Fragment>
		);
	}
}

export default OrderSummary;