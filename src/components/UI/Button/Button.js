import React from 'react';
import btnClasses from './Button.css';
import classnames from 'classnames'

// Instead of Success and Danger like Mr Schwartzmüller's project,
// The classes instead are gonna be Action and Caution

// My project's: buttonAction = Max's project: Success
// My project's: buttonCaution = Max's project: Caution
class button extends React.Component {
    state = {
        stdStyles: [
            btnClasses.button,
            btnClasses.buttonLongShadow,
            btnClasses.button3d,
            btnClasses.buttonBox
        ]
    }
    componentDidMount() {
        if (typeof this.props.children === 'string') {
            let styles = [btnClasses.button, btnClasses.buttonRounded, btnClasses.buttonGlow];
            this.setState({stdStyles: styles});

        }
    }
    render() {
        const classes = classnames(this.state.stdStyles, btnClasses[this.props.btnType]);
        return(
            <button
                style={{margin: '3px'}}
                className={classes} 
                onClick={this.props.clicked}>{this.props.children}</button>
        );
    }
    
};

export default button;