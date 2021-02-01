import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Typography from '../Typography/Typography.jsx';
import Task from '../Task/Task.jsx';
import Button from '../Button/Button.jsx';
import Draggable from '../Draggable/Draggable.jsx';
import SummaryDescriptionMaker from '../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx';
import List from "../List/List.jsx";
import styles from './styles.js';

import Droppable from "../../components/Droppable/Droppable.jsx";

const TaskList = (props) => {
    const {
        classes,
        summary,
        dateTime,
        isEditList,
        placeholder,
        id,
        handleChangeListName,
        handleSaveListName,
        handleCancelListName,
        handleCreateTask,
        handleChangeTaskName,
        handleSaveTaskName,
        handleCancelTaskName,
        handleSort
    } = props;
    const tasksObject = props.tasks;
    const tasks = Object.values(tasksObject);

    return (
        <div
            className={ classes.wrapper }
        >
            {
                isEditList ?
                    <List>
                        <SummaryDescriptionMaker
                            value={ summary }
                            placeholder={ placeholder }
                            handleChange={ handleChangeListName }
                            handleSave={ handleSaveListName }
                            handleCancel={ handleCancelListName }
                        />
                    </List>:
                    <Typography
                        variant={'summary'}
                        text={ summary }
                    />
            }
            {
                <List>
                    {
                        !!tasks.length && tasks.map((task, index) => (
                            <Droppable
                                key={ task.id }
                                options={ {
                                    droppableTaskListId: id,
                                    sortableId: index,
                                } }
                                handleDrop={ handleSort }
                                type='drag-task'
                            >
                                <Draggable
                                    type='drag-task'
                                    options={{
                                        taskId: index,
                                        draggableTaskListId: id,
                                    }}
                                >
                                    <Task
                                        { ...task }
                                        handleChangeTask={ handleChangeTaskName(index) }
                                        handleSaveTask={ handleSaveTaskName(index) }
                                        handleCancelTask={ handleCancelTaskName(index) }
                                    />
                                </Draggable>
                            </Droppable>
                        ))
                    }
                </List>
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
    // id: PropTypes.string, TODO: fix after change state structure
    handleChangeListName: PropTypes.func.isRequired,
    handleSaveListName: PropTypes.func.isRequired,
    handleCancelListName: PropTypes.func.isRequired,
    handleCreateTask: PropTypes.func.isRequired,
    handleChangeTaskName: PropTypes.func.isRequired,
    handleSaveTaskName: PropTypes.func.isRequired,
    handleCancelTaskName: PropTypes.func.isRequired,
    handleSort: PropTypes.func.isRequired,
};

TaskList.defaultProps = {
    isEditList: false,
    summary: '',
    dateTime: 'Created Date',
    placeholder: '',
};

const StyledList = withStyles(styles)(TaskList);

export default StyledList;
