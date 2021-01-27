import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Button from '../Button/Button.jsx';
import InputArea from '../InputArea/InputArea.jsx';
import styles from './styles.js';

const SummaryDescriptionMaker = (props) => {
    const {
        classes,
        value,
        placeholder,
        handleChange,
        handleSave,
        handleCancel,
        handleKeyUp,
    } = props;

    const buttonClasses = classNames(
        classes.inputControls,
    );

    return (
        <div className={ classes.listItem }>
            <InputArea
                value={ value }
                placeholder={ placeholder }
                handleChange={ handleChange }
                handleKeyUp={ handleKeyUp }
            />
            <Button
                text={'✔'}
                classNameProps={ buttonClasses }
                onClick={ handleSave }
                variant='secondary'
                isDisabled={ !value.length }
            />
            <Button
                text={'✖'}
                classNameProps={ buttonClasses }
                isAlertColor={ true }
                onClick={ handleCancel }
                variant='secondary'
            />
        </div>
    );
};

SummaryDescriptionMaker.propTypes = {
    classes: PropTypes.shape({
        inputControls: PropTypes.string,
        listItem: PropTypes.string,
    }).isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
};

const StyledSummaryDescriptionMaker = withStyles(styles)(SummaryDescriptionMaker);

export default StyledSummaryDescriptionMaker;
