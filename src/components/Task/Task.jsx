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
        listId,
        taskId,
        placeholder,
        handleChangeTask,
        handleSaveTask,
        handleCancelTask
    } = props;

    return (
        isNewTask ?
            <SummaryDescriptionMaker
                text={description}
                variant='textarea'
                listId={listId}
                taskId={taskId}
                placeholder={placeholder}

                handleChange={handleChangeTask}
                handleSave={handleSaveTask}
                handleCancel={handleCancelTask}
            /> :
            <Typography variant={'description'} value={description}/>
    );
};

Task.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    description: PropTypes.string,
    isNewTask: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    listId: PropTypes.number.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

const StyledList = withStyles(styles)(Task);

export default StyledList;
