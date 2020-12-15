import React from "react";
import PropTypes from 'prop-types';

const InputArea = ({ variant, text, id, classNameProps, changeHandler, handleChange, placeholder }) => {

    return (
        variant === 'short'
            ? <input
                type="text"
                value={ text }
                className={ classNameProps }
                onChange={ event => changeHandler(handleChange(event.target.value, id)) }
                placeholder={placeholder}
            />
            : <textarea
                type="text"
                value={ text }
                className={ classNameProps }
                onChange={ event => changeHandler(handleChange(event.target.value, id)) }
                placeholder={placeholder}
            />
    )
};

InputArea.propTypes = {
    text: PropTypes.string,
    id: PropTypes.number.isRequired,
    classNameProps: PropTypes.string,
    changeHandler: PropTypes.func,
    actionCreator: PropTypes.func,
    placeholder: PropTypes.string.isRequired,
};

InputArea.defaultProps = {

};

export default InputArea;
