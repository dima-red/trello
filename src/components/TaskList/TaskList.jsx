import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Typography from '../../atomic-components/Typography/Typography.jsx';
import Task from '../Task/Task.jsx';
import Button from '../../atomic-components/Button/Button.jsx';
import Draggable from '../Draggable/Draggable.jsx';
import SummaryDescriptionMaker from '../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx';
import styles from './styles.js';

const TaskList = (props) => {
    const {
        classes,
        summary,
        dateTime,
        isEditList,
        placeholder,
        // listId,
        handleChangeListName,
        handleSaveListName,
        handleCancelListName,
        handleCreateTask,
        handleChangeTaskName,
        handleSaveTaskName,
        handleCancelTaskName,
        // handleDragStart,
        // handleDrop,
        // handleDragOver
    } = props;
    const tasksObject = props.tasks;
    const tasks = Object.values(tasksObject);

    return (
        <div
            className={ classes.wrapper }
            // onDrop={ event => handleDrop(event.dataTransfer) }
            // onDragOver={ event => handleDragOver(event) }
        >
            {
                isEditList ?
                    <SummaryDescriptionMaker
                        value={ summary }
                        variant='input'
                        placeholder={ placeholder }
                        handleChange={ handleChangeListName }
                        handleSave={ handleSaveListName }
                        handleCancel={ handleCancelListName }
                    /> :
                    <Typography
                        variant={'summary'}
                        text={ summary }
                    />
            }
            {
                !!tasks.length && tasks.map(({ taskId, ...others }) => (
                    <Draggable key={ taskId } dataItem={ taskId }>
                        <Task
                            {...others}

                            handleChangeTask={ handleChangeTaskName(taskId) }
                            handleSaveTask={ handleSaveTaskName(taskId) }
                            handleCancelTask={ handleCancelTaskName(taskId) }
                        />
                    </Draggable>
                ))
            }
            <div className={ classes.footer }>
                <Button
                    text={'Add Task'}
                    classNameProps={ classes.addTaskButton }
                    onClick={ handleCreateTask }
                    variant='secondary'
                />
                <Typography
                    variant={'date'}
                    text={ dateTime }
                />
            </div>
        </div>
    );
};

TaskList.propTypes = {
    classes: PropTypes.shape({
        wrapper: PropTypes.string,
        footer: PropTypes.string,
        addTaskButton: PropTypes.string,
    }).isRequired,
    summary: PropTypes.string,
    dateTime: PropTypes.string.isRequired,
    isEditList: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
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
    dateTime: 'Created Date',
    placeholder: '',
};

const StyledList = withStyles(styles)(TaskList);

export default StyledList;
