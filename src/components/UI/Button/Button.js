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
        if (this.props.children) {
            let styles = [btnClasses.button, btnClasses.buttonRounded, btnClasses.buttonGlow];
            this.setState({stdStyles: styles});
        }
    }
    
    render() {
        const classes = classnames(this.state.stdStyles, btnClasses[this.props.btnType]);
        let btn = (
            <button
                disabled={this.props.disabled}
                style={{margin: '3px'}}
                className={classes} 
                onClick={this.props.clicked}>{this.props.children}</button>
        );

        if (this.props.hide) {
            btn = null;
        }
        return(btn);
    }
    
};

export default button;