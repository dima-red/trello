import React from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import styles from "./styles";

const buttonVariantsMap = {
    main: 'mainButton',
    additional: 'additionalButton',
};

const Button = ({ classes, text, classNameProps, onClick, isAlertColor, variant}) => {
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
        >
            <span className={ buttonTextClasses }>{ text }</span>
        </button>
    )
};

Button.defaultProps = {
    isAlertColor: false,
    variant: 'main', // can be 'additional'
    classNameProps: '',
};

const StyledButton = withStyles(styles)(Button);

export default StyledButton;
