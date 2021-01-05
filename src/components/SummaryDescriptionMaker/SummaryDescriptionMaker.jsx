import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import Button from '../../atomic-components/Button/Button.jsx';
import InputArea from '../../atomic-components/InputArea/InputArea.jsx';
import styles from './styles.js';

const SummaryDescriptionMaker = (props) => {
    const {
        classes,
        value,
        placeholder,
        variant,
        handleChange,
        handleSave,
        handleCancel,
        handleEnter
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
                value={ value }
                placeholder={ placeholder }
                handleChange={ handleChange }
                handleEnter={ handleEnter }
                variant={ variant }
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
        textAreaControls: PropTypes.string,
        listItem: PropTypes.string,
    }).isRequired,
    text: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
    variant: PropTypes.string.isRequired,
};

const StyledSummaryDescriptionMaker = withStyles(styles)(SummaryDescriptionMaker);

export default StyledSummaryDescriptionMaker;
