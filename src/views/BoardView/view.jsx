import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import withStyles from 'react-jss';
import classNames from 'classnames';
import {
    createTaskList,
    nameTaskList,
    saveTaskList,
    cancelTaskListCreation,
    createTask,
    nameTask,
    saveTask,
    cancelTaskCreation,
    moveTask,
    sortTask,
    sortList
} from './actions';
import Button from '../../components/Button/Button.jsx';
import TaskList from '../../components/TaskList/TaskList.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import Container from '../../components/Container/Container.jsx';
import Droppable from "../../components/Droppable/Droppable.jsx";
import Draggable from "../../components/Draggable/Draggable.jsx";
import styles from './styles';

const View = ({ classes }) => {
    const buttonClassNames = classNames(
        classes.headerBtn,
        classes.addBtn,
    );
    const taskLists = Object.values(useSelector(state => state.boardViewReducer.taskLists));
    const dispatch = useDispatch();

    console.info('Store.taskLists : ', useSelector(state => state.boardViewReducer.taskLists));
    console.info('Array from Store.taskLists : ', taskLists);

    return (
        <div className={classes.app}>
            <div className={classes.viewWrapper}>
                <header className={classes.appHeader}>
                    <div className={classes.headerLeft}>
                        <Button
                            text={'Boards'}
                            classNameProps={classes.headerBtn}
                            onClick={() => console.log('Add Board')}
                        />
                    </div>
                    <div className={classes.headerRight}>
                        <Button
                            text={'+'}
                            classNameProps={buttonClassNames}
                            onClick={() => dispatch(createTaskList())}
                        />
                        <Logo/>
                    </div>
                </header>
                <main>
                    <div className={classes.scrollable}>
                        <Container options={ { direction: 'row' } }>
                            {
                                taskLists.map(taskList => (
                                    <Droppable
                                        key={ taskList.id }
                                        options={{
                                            droppableTaskListId: taskList.id,
                                        }}
                                        type='drag-list'
                                        handleDrop={ draggableTaskListId => dispatch(sortList(taskList.id, draggableTaskListId)) }
                                    >
                                        <Draggable
                                            key={ taskList.id }
                                            type='drag-list'
                                            options={{
                                                draggableTaskListId: taskList.id,
                                            }}
                                        >
                                            <Droppable
                                                key={taskList.id}
                                                options={{
                                                    droppableTaskListId: taskList.id,
                                                    handlePropagation: event => event.stopPropagation(),
                                                }}
                                                type='drag-task'
                                                handleDrop={(draggableTaskListId, taskId) => dispatch(moveTask(taskList.id, draggableTaskListId, taskId))}
                                            >
                                                <TaskList
                                                    {...taskList}
                                                    handleChangeListName={ ({ target: { value } }) => dispatch(nameTaskList(value, taskList.id)) }
                                                    handleSaveListName={ () => dispatch(saveTaskList(taskList.id))}
                                                    handleCancelListName={ () => dispatch(cancelTaskListCreation(taskList.id)) }

                                                    handleCreateTask={ () => dispatch(createTask(taskList.id)) }

                                                    handleChangeTaskName={ taskId => ({ target: { value } }) => dispatch(nameTask(value, taskList.id, taskId)) }
                                                    handleSaveTaskName={ taskId => () => dispatch(saveTask(taskList.id, taskId)) }
                                                    handleCancelTaskName={ taskId => () => dispatch(cancelTaskCreation(taskList.id, taskId)) }

                                                    handleSort={ (draggableTaskListId, taskId, droppableTaskId) => dispatch(sortTask(taskList.id, draggableTaskListId, taskId, droppableTaskId)) }
                                                />
                                            </Droppable>
                                        </Draggable>
                                    </Droppable>
                                ))
                            }
                        </Container>
                    </div>
                </main>
            </div>
        </div>
    )
};

View.propTypes = {
    classes: PropTypes.shape({
        headerBtn: PropTypes.string,
        addBtn: PropTypes.string,
        app: PropTypes.string,
        viewWrapper: PropTypes.string,
        appHeader: PropTypes.string,
        headerLeft: PropTypes.string,
        headerRight: PropTypes.string,
        scrollable: PropTypes.string,
        boardContent: PropTypes.string,
    }).isRequired,
};

const StyledView = withStyles(styles)(View);

export default StyledView;
