import React from "react";
import withStyles from "react-jss";
import classNames from "classnames";
import styles from "./styles";

const Button = ({ classes, text, classNameProps, onClick, isCancel}) => {
    const buttonTextClasses = classNames(
        classes.text,
        {
            [classes.cancelButton]: isCancel,
        },
    );

    return (
        <button
            className={ `${ classes.button } ${ classNameProps }` }
            onClick={ onClick }
        >
            <span className={ buttonTextClasses }>{ text }</span>
        </button>
    )
};

Button.defaultProps = {
    isCancel: false,
};

const StyledButton = withStyles(styles)(Button);

export default StyledButton;
