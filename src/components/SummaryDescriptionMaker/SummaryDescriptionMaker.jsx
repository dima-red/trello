import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import classNames from 'classnames';
import Button from "../../atomic-components/Button/Button.jsx";
import InputArea from "../../atomic-components/InputArea/InputArea.jsx";
import styles from "./styles.js";

const SummaryDescriptionMaker = (props) => {
    const { classes, text, listId, taskId, placeholder, changeHandler, variant, handleChange, handleSave, handleCancel } = props;

    const buttonClasses = classNames(
        classes.inputControls,
        {
            [classes.textAreaControls]: variant === 'textarea',
        },
    );

    return (
        <div className={ classes.listItem }>
            <InputArea
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
                variant='additional'
                isDisabled={ !text.length }
            />
            <Button
                text={"✖"}
                classNameProps={ buttonClasses }
                isAlertColor={ true }
                onClick={ () => changeHandler(handleCancel(listId, taskId)) }
                variant='additional'
            />
        </div>
    );
};

SummaryDescriptionMaker.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    listId: PropTypes.number.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

const StyledSummaryDescriptionMaker = withStyles(styles)(SummaryDescriptionMaker);

export default StyledSummaryDescriptionMaker;
