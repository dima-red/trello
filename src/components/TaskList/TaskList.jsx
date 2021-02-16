import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import Typography from '../Typography/Typography.jsx';
import Task from '../Task/Task.jsx';
import Button from '../Button/Button.jsx';
import Droppable from '../../components/Droppable/Droppable.jsx';
import Draggable from '../Draggable/Draggable.jsx';
import SummaryDescriptionMaker from '../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx';
import List from '../List/List.jsx';
import styles from './styles.js';

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
        handleSort,
        handleAction,
        handleEventPropagation
    } = props;
    const tasksObject = props.tasks;
    const tasks = Object.values(tasksObject);

    return (
        <div
            className={ classes.wrapper }
        >
            <List>
                {
                    isEditList ?
                        <SummaryDescriptionMaker
                            value={ summary }
                            placeholder={ placeholder }
                            handleChange={ handleChangeListName }
                            handleSave={ handleSaveListName }
                            handleCancel={ handleCancelListName }
                        /> :
                        <Typography
                            variant={'summary'}
                            text={ summary }
                        >
                            <Button
                                variant='icon'
                                classNameProps="far fa-edit"
                                onClick={ () => console.log('Ediiiiiiittttttttt') }
                            />
                            <Button
                                variant='icon'
                                classNameProps="far fa-trash-alt"
                                onClick={ () => console.log('Deleeeete') }
                            />
                        </Typography>
                }
                {
                    !!tasks.length && tasks.map((task, index) => (
                        <Droppable
                            key={ task.id }
                            data={ {
                                dropTypes: ['task-list', 'task'],
                                droppableTaskListId: id,
                                droppableTaskId: index,
                            } }
                            handleDrop={ handleSort }
                            handleAction={ handleAction }
                            handleEventPropagation={ handleEventPropagation }
                        >
                            <Draggable
                                data={{
                                    type: 'task',
                                    draggableTaskId: index,
                                    draggableTaskListId: id,
                                    draggedData: {
                                        task
                                    }
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
            </List>
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
    id: PropTypes.number.isRequired,
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
