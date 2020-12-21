import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import classNames from 'classnames';
import Button from "../../atomic-components/Button/Button.jsx";
import InputArea from "../../atomic-components/InputArea/InputArea.jsx";
import styles from "./styles.js";

const SummaryDescriptionMaker = (props) => {
    const {
        classes,
        text,
        placeholder,
        variant,
        handleChange,
        handleSave,
        handleCancel,
    } = props;

    const buttonClasses = classNames(
        classes.inputControls,
        {
            [classes.textAreaControls]: variant === 'textarea',
        },
    );

    return (
        <div className={ classes.listItem }>
            <InputArea
                text={ text }
                placeholder={ placeholder }
                handleChange={ handleChange }
                variant={ variant }
            />
            <Button
                text={"✔"}
                classNameProps={ buttonClasses }
                onClick={ handleSave }
                variant='additional'
                isDisabled={ !text.length }
            />
            <Button
                text={"✖"}
                classNameProps={ buttonClasses }
                isAlertColor={ true }
                onClick={ handleCancel }
                variant='additional'
            />
        </div>
    );
};

SummaryDescriptionMaker.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
    taskListId: PropTypes.number.isRequired,
    taskId: PropTypes.number.isRequired,
};

const StyledSummaryDescriptionMaker = withStyles(styles)(SummaryDescriptionMaker);

export default StyledSummaryDescriptionMaker;
