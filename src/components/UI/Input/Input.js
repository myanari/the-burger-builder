import React from 'react';

import styles from './Input.css';

const input = (props) => {
  let inputElement = null;

  switch (props.elementType){
    case('text'):
      inputElement = <textarea className={styles.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>
      break;
    case('input'):
      inputElement = <input className={styles.InputElement} {...props.elementConfig} value={props.value} onChange={props.changed}/>
      break;
    case('select'):
      inputElement = (
        <select className={styles.InputElement} value={props.value} onChange={props.changed}>
          {props.elementConfig.options.map(option => (
            <option value={option.value} key={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      );
      break;
    default:
      inputElement = <input className={styles.InputElement} {...props.elementConfig} onChange={props.changed}/>
  }

  return(
    <div className={styles.Input}>
      <label className={styles.Label}>{props.label}</label>
      {inputElement}
    </div>
  );
};

export default input;