import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from './styles';

const buttonVariantsMap = {
    primary: 'primaryButton',
    secondary: 'secondaryButton',
    icon: 'icon',
};

const sizesMap = {
    small: 'iconSmall',
    medium: 'iconMedium',
    large: 'iconLarge',
};

const visibilityMap = {
    visible: 'visible',
    hidden: 'hidden'
};

const Button = ({ classes, text, classNameProps, handleClick, variant, isDisabled, size, visibility, isAnimated, iconProps }) => {
    const buttonClasses = classNames(
        classes.button,
        classes[buttonVariantsMap[variant]],
        classes[sizesMap[size]],
        classes[visibilityMap[visibility]],
        {
            [classes.animate]: isAnimated,
        },
        classNameProps
    );

    console.log(!!iconProps);

    const buttonIconClasses = classNames(
        iconProps,
        {
            [classes.fIcon]: !!iconProps,
        },
    );

    const buttonTextClasses = classNames(
        classes.buttonContent,
        {
            [classes.buttonText]: !!text,
        },
    );

    return (
        <button
            className={ buttonClasses }
            onClick={ handleClick }
            disabled={ isDisabled }
        >
            <span className={ buttonIconClasses }></span>
            <span className={ buttonTextClasses }>{ text }</span>
        </button>
    )
};

Button.propTypes = {
    classes: PropTypes.shape({
        button: PropTypes.string,
        buttonContent: PropTypes.string,
        alertColor: PropTypes.string,
    }).isRequired,
    text: PropTypes.string,
    classNameProps: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
    isDisabled: PropTypes.bool,
};

Button.defaultProps = {
    variant: 'secondary', // can be 'icon'
    size: 'medium',
    visibility: 'visible',
    isAnimated: true,
    classNameProps: '',
    isDisabled: false,
    text: '',
};

const StyledButton = withStyles(styles)(Button);

export default StyledButton;
