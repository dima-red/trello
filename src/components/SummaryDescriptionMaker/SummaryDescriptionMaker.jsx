import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Button from '../Button/Button.jsx';
import InputArea from '../InputArea/InputArea.jsx';
import styles from './styles.js';

const SummaryDescriptionMaker = (props) => {
    const {
        classes,
        value,
        placeholder,
        isNewList,
        handleChange,
        handleSave,
        handleCancel,
    } = props;

    const keyHandler = ({ key, target: { defaultValue } }) => {
        if (key === 'Escape') {
            handleCancel();
        }

        if (key === 'Enter' && defaultValue) {
            handleSave();
        }
    };

    return (
        <div className={ classes.listItem }>
            <InputArea
                value={ value }
                placeholder={ placeholder }
                handleChange={ handleChange }
                handleKeyUp={ keyHandler }
            />
            <Button
                variant='icon'
                isAnimated={ !!value.length }
                iconProps='fas fa-check'
                handleClick={ handleSave }
                isDisabled={ !value.length }
            />
            {
                isNewList ?
                    <Button
                        variant='icon'
                        // text='Test'
                        isAnimated={ false }
                        classNameProps={ classes.trash }
                        iconProps='far fa-trash-alt'
                        handleClick={ handleCancel }
                    /> :
                    <Button
                        variant='icon'
                        iconProps='fas fa-times'
                        handleClick={ () => console.log('AAAAA') }
                    />
            }
        </div>
    );
};

SummaryDescriptionMaker.propTypes = {
    classes: PropTypes.shape({
        // inputControls: PropTypes.string,
        listItem: PropTypes.string,
    }).isRequired,
    value: PropTypes.string,
    placeholder: PropTypes.string.isRequired,
    handleChange: PropTypes.func.isRequired,
    handleSave: PropTypes.func.isRequired,
    handleCancel: PropTypes.func.isRequired,
};

const StyledSummaryDescriptionMaker = withStyles(styles)(SummaryDescriptionMaker);

export default StyledSummaryDescriptionMaker;
