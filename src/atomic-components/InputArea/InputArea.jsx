import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import classNames from "classnames";
import styles from "../../atomic-components/InputArea/styles";

const InputArea = (props) => {
    const { classes, variant, text, handleChange, placeholder, listId, taskId } = props;
    const Component = variant;
    const componentClassNames = classNames(
        classes.inputElement,
        classes[variant],
    );

    return (
        <Component
            type="text"
            value={text}
            className={ componentClassNames }
            onChange={ event => handleChange(event.target.value, listId, taskId) }
            placeholder={placeholder}
        />
    )
};

InputArea.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    variant: PropTypes.string.isRequired,
    text: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
    placeholder: PropTypes.string.isRequired,
};

InputArea.defaultProps = {
    variant: 'input',
    text: '',
};

const StyledInputArea = withStyles(styles)(InputArea);

export default StyledInputArea;
