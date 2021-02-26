import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Typography from '../Typography/Typography.jsx';
import SummaryDescriptionMaker from '../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx';
import styles from './styles.js';
import Button from '../Button/Button.jsx';

const Task = (props) => {
    const {
        description,
        isEditTask,
        placeholder,
        handleChangeTask,
        handleSaveTask,
        handleCancelTask,
    } = props;

    return (
        isEditTask ?
            <SummaryDescriptionMaker
                value={ description }
                placeholder={ placeholder }

                handleChange={ handleChangeTask }
                handleSave={ handleSaveTask }
                handleCancel={ handleCancelTask }
            /> :
            <Typography
                variant={ 'description' }
                text={ description }
            >
                <Button
                    variant='icon'
                    size='small'
                    visibility='hidden'
                    isAnimated={ false }
                    className='TEST'
                    iconProps="far fa-edit"
                    onClick={ () => console.log('Ediiiiiiittttttttt') }
                />
                <Button
                    variant='icon'
                    size='small'
                    visibility='hidden'
                    isAnimated={ false }
                    iconProps="far fa-trash-alt"
                    onClick={ () => console.log('Deleeeete') }
                />
            </Typography>
    );
};

Task.propTypes = {
    description: PropTypes.string,
    isEditTask: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    handleChangeTask: PropTypes.func.isRequired,
    handleSaveTask: PropTypes.func.isRequired,
    handleCancelTask: PropTypes.func.isRequired,
};

Task.defaultProps = {
    description: '',
};

const StyledTask = withStyles(styles)(Task);

export default StyledTask;
