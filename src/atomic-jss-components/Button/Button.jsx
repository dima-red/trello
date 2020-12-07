import React from 'react';
import withStyles from 'react-jss';
import styles from './styles';

const Button = ({ classes, text, classNameProps, onClick }) => {

    return (
        <button className={ `${ classes.btn } ${ classNameProps }` } onClick={ onClick }>
            <span className={ classes.text }>{ text }</span>
        </button>
    )
};
const StyledButton = withStyles(styles)(Button);

export default StyledButton;
