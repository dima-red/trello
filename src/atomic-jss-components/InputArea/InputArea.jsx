import React from "react";
import PropTypes from 'prop-types';

const InputArea = ({variant, text, listId, taskId, classNameProps, changeHandler, handleChange, placeholder}) => {
    const Component = variant === 'short' ? 'input' : 'textarea';
    return (
        <Component
            type="text"
            value={text}
            className={classNameProps}
            onChange={event => changeHandler(handleChange(event.target.value, listId, taskId))}
            placeholder={placeholder}
        />
    )
};

InputArea.propTypes = {
    text: PropTypes.string,
    listId: PropTypes.number.isRequired,
    taskId: PropTypes.number,
    classNameProps: PropTypes.string,
    changeHandler: PropTypes.func,
    actionCreator: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
};

InputArea.defaultProps = {};

export default InputArea;
