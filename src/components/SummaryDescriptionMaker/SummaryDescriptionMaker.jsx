import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import classNames from 'classnames';
import Button from "../../atomic-components/Button/Button.jsx";
import InputArea from "../../atomic-components/InputArea/InputArea.jsx";
import styles from "./styles.js";

const SummaryDescriptionMaker = (props) => {
    const { classes, text, placeholder, variant, handleChange, handleSave, handleCancel, listId, taskId, handleChangeTask, handleSaveTask, handleCancelTask } = props;

    const buttonClasses = classNames(
        classes.inputControls,
        {
            [classes.textAreaControls]: variant === 'textarea',
        },
    );

    console.log(handleChange);


    return (
        <div className={ classes.listItem }>
            <InputArea
                text={ text }
                placeholder={ placeholder }
                handleChange={ handleChange || handleChangeTask }
                listId={ listId }
                taskId={ taskId }
                variant={ variant }
            />
            <Button
                text={"✔"}
                classNameProps={ buttonClasses }
                onClick={ () => handleSave(taskId, listId) }
                variant='additional'
                isDisabled={ !text.length }
            />
            <Button
                text={"✖"}
                classNameProps={ buttonClasses }
                isAlertColor={ true }
                onClick={ () => handleCancel(taskId, listId) }
                variant='additional'
            />
        </div>
    );
};

SummaryDescriptionMaker.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

const StyledSummaryDescriptionMaker = withStyles(styles)(SummaryDescriptionMaker);

export default StyledSummaryDescriptionMaker;
