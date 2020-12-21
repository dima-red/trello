import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import classNames from "classnames";
import styles from "./styles";

const buttonVariantsMap = {
    primary: 'primaryButton',
    secondary: 'secondaryButton',
};

const Button = ({ classes, text, classNameProps, onClick, isAlertColor, variant, isDisabled }) => {
    const buttonClasses = classNames(
        classes.button,
        classes[buttonVariantsMap[variant]],
        classNameProps
    );

    const buttonTextClasses = classNames(
        classes.text,
        {
            [classes.alertColor]: isAlertColor,
        },
    );

    return (
        <button
            className={ buttonClasses }
            onClick={ onClick }
            disabled={ isDisabled }
        >
            <span className={ buttonTextClasses }>{ text }</span>
        </button>
    )
};

Button.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    text: PropTypes.string,
    classNameProps: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    isAlertColor: PropTypes.string,
    variant: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    isAlertColor: false,
    variant: 'primary', // can be 'additional'
    classNameProps: '',
    isDisabled: false,
};

const StyledButton = withStyles(styles)(Button);

export default StyledButton;
