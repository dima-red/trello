import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from '../../atomic-components/InputArea/styles';

const InputArea = (props) => {
    const { classes, variant, value, handleChange, handleKeyUp, placeholder } = props;
    const Component = variant;
    const componentClassNames = classNames(
        classes.inputElement,
        classes[variant],
    );

    return (
        <Component
            type='text'
            value={ value }
            className={ componentClassNames }
            onChange={ event => handleChange(event.target.value) }


            onKeyUp={ event => handleKeyUp(event) }


            placeholder={ placeholder }
        />
    )
};

InputArea.propTypes = {
    classes: PropTypes.shape({
        inputElement: PropTypes.string,
    }).isRequired,
    variant: PropTypes.string.isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};

InputArea.defaultProps = {
    variant: 'input',
    value: '',
};

const StyledInputArea = withStyles(styles)(InputArea);

export default StyledInputArea;
