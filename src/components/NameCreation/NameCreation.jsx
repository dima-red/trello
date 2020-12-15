import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import classNames from 'classnames';
import Button from "../../atomic-jss-components/Button/Button.jsx";
import InputArea from "../../atomic-jss-components/InputArea/InputArea.jsx";
import styles from "./styles.js";

const NameCreation = (props) => {
    const { classes, text, listId, taskId, placeholder, changeHandler, variant, handleChange, handleSave, handleCancel } = props;

    const buttonClasses = classNames(
        classes.listNameButton,
        {
            [classes.textArea]: variant !== 'short',
        },
    );

    return (
        <div className={ classes.listItem }>
            <InputArea
                classNameProps={classes.listNameInput}
                text={text}
                placeholder={placeholder}
                changeHandler={changeHandler}
                handleChange={handleChange}
                listId={listId}
                taskId={taskId}
                variant={variant}
            />
            <Button
                text={"✔"}
                classNameProps={ buttonClasses }
                onClick={ () => changeHandler(handleSave(listId, taskId)) }
            />
            <Button
                text={"✖"}
                classNameProps={ buttonClasses }
                isAlertColor={ true }
                onClick={ () => changeHandler(handleCancel(listId, taskId)) }
            />
        </div>
    );
};

NameCreation.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    summary: PropTypes.string,
    dateTime: PropTypes.string.isRequired,
    isNewList: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    listId: PropTypes.number.isRequired,
    tasks: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

const StyledNameCreation = withStyles(styles)(NameCreation);

export default StyledNameCreation;
