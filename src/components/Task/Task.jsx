import React from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Typography from '../../atomic-components/Typography/Typography.jsx';
import SummaryDescriptionMaker from "../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx";
import styles from "./styles.js";

const Task = (props) => {
    const {
        classes,
        description,
        isNewTask,
        taskId,
        placeholder,
        handleChangeTask,
        handleSaveTask,
        handleCancelTask
    } = props;

    return (
        isNewTask ?
            <SummaryDescriptionMaker
                text={ description }
                variant='textarea'
                placeholder={ placeholder }

                handleChange={ handleChangeTask(taskId) }
                handleSave={ handleSaveTask(taskId) }
                handleCancel={ handleCancelTask(taskId) }
            /> :
            <Typography variant={ 'description' } value={ description }/>
    );
};

Task.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    description: PropTypes.string,
    isNewTask: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    taskId: PropTypes.number.isRequired,
    handleChangeTask: PropTypes.func.isRequired,
    handleSaveTask: PropTypes.func.isRequired,
    handleCancelTask: PropTypes.func.isRequired,
};

Task.defaultProps = {
    description: '',
};

const StyledList = withStyles(styles)(Task);

export default StyledList;
