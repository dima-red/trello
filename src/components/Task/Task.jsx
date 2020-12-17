import React from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import { nameTask, saveTask, cancelTaskCreation } from "../../views/BoardView/actions/actions";
import Typography from '../../atomic-components/Typography/Typography.jsx';
import SummaryDescriptionMaker from "../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx";
import styles from "./styles.js";

const Task = ({ classes, description, isNewTask, listId, taskId, placeholder, changeHandler, handleCreate }) => {

    return (
        isNewTask ?
            <SummaryDescriptionMaker
                text={ description }
                variant='textarea'
                listId={ listId }
                taskId={ taskId }
                placeholder={ placeholder }
                changeHandler={ changeHandler }
                handleChange={ nameTask }
                handleSave={ saveTask }
                handleCancel={ cancelTaskCreation }
            /> :
            <Typography variant={'description'} value={ description }/>
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
