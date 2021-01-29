import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from './styles';

const InputArea = (props) => {
    const { classes, value, handleChange, handleKeyUp, placeholder } = props;
    const componentClassNames = classNames(
        classes.inputElement,
        classes.input,
    );

    return (
        <input
            type='text'
            value={ value }
            className={ componentClassNames }
            onChange={ handleChange }
            onKeyUp={ handleKeyUp }
            placeholder={ placeholder }
        />
    )
};

InputArea.propTypes = {
    classes: PropTypes.shape({
        inputElement: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    handleKeyUp: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};

InputArea.defaultProps = {
    value: '',
    placeholder: '',
};

const StyledInputArea = withStyles(styles)(InputArea);

export default StyledInputArea;
