import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Typography from '../Typography/Typography.jsx';
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
        handleKeyUp,
    } = props;

    return (
        isEditTask ?
            <SummaryDescriptionMaker
                value={ description }
                placeholder={ placeholder }

                handleChange={ handleChangeTask }
                handleSave={ handleSaveTask }
                handleCancel={ handleCancelTask }
                handleKeyUp={ handleKeyUp }
            /> :
            <Typography
                variant={ 'description' }
                text={ description }
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

const StyledTask = withStyles(styles)(Task);

export default StyledTask;
