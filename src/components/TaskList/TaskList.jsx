import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import Typography from "../../atomic-components/Typography/Typography.jsx";
import Task from "../Task/Task.jsx";
import Button from "../../atomic-components/Button/Button.jsx";
import SummaryDescriptionMaker from "../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx";
import styles from "./styles.js";

const TaskList = (props) => {
    const {
        classes,
        summary,
        dateTime,
        isEditList,
        placeholder,
        handleChangeListName,
        handleSaveListName,
        handleCancelListName,
        handleCreateTask,
        handleChangeTaskName,
        handleSaveTaskName,
        handleCancelTaskName
    } = props;
    const tasks = Object.values(props.tasks);

    return (
        <div className={ classes.wrapper }>
            {
                isEditList ?
                    <SummaryDescriptionMaker
                        text={ summary }
                        variant='input'
                        placeholder={ placeholder }
                        handleChange={ handleChangeListName }
                        handleSave={ handleSaveListName }
                        handleCancel={ handleCancelListName }
                    /> :
                    <Typography variant={'summary'} value={ summary }/>
            }
            {
                !!tasks.length && tasks.map(task => (
                    <Task
                        key={ task.taskId }
                        {...task}

                        handleChangeTask={ handleChangeTaskName }
                        handleSaveTask={ handleSaveTaskName }
                        handleCancelTask={ handleCancelTaskName }
                    />
                ))
            }
            <div className={ classes.footer }>
                <Button
                    text={"Add Task"}
                    classNameProps={ classes.addTaskButton }
                    onClick={ handleCreateTask }
                    variant='secondary'
                />
                <Typography
                    variant={'date'}
                    value={ dateTime }/>
            </div>
        </div>
    );
};

TaskList.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    summary: PropTypes.string,
    dateTime: PropTypes.string.isRequired,
    isEditList: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    tasks: PropTypes.array.isRequired,
    handleChangeListName: PropTypes.func.isRequired,
    handleSaveListName: PropTypes.func.isRequired,
    handleCancelListName: PropTypes.func.isRequired,
    handleCreateTask: PropTypes.func.isRequired,
    handleChangeTaskName: PropTypes.func.isRequired,
    handleSaveTaskName: PropTypes.func.isRequired,
    handleCancelTaskName: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
    isEditList: false,
    summary: '',
};

const StyledList = withStyles(styles)(TaskList);

export default StyledList;
