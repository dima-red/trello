import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Typography from '../../atomic-components/Typography/Typography.jsx';
import SummaryDescriptionMaker from '../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx';
import styles from './styles.js';

const Task = (props) => {
    const {
        // classes,
        description,
        isEditTask,
        placeholder,
        handleChangeTask,
        handleSaveTask,
        handleCancelTask,
        // handleDragStart
    } = props;

    return (
        isEditTask ?
            <SummaryDescriptionMaker
                text={ description }
                variant='textarea'
                placeholder={ placeholder }

                handleChange={ handleChangeTask }
                handleSave={ handleSaveTask }
                handleCancel={ handleCancelTask }
            /> :
            <Typography
                variant={ 'description' }
                value={ description }
                // handleDragStart={ handleDragStart(taskId) }
            />
    );
};

Task.propTypes = {
    classes: PropTypes.shape({}).isRequired,
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

const StyledList = withStyles(styles)(Task);

export default StyledList;
