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
import SortList from "../../components/SortList/SortList.jsx";
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

    const keyBoardHandler = ({ key, target }, taskListId, taskId) => {
        if (key === 'Escape' && !taskId) {
            dispatch(cancelTaskListCreation(taskListId));
        }

        if (key === 'Escape' && taskId) {
            dispatch(cancelTaskCreation(taskListId, taskId));
        }

        if (key === 'Enter' && !taskId) {
            target.defaultValue && dispatch(saveTaskList(taskListId));
        }

        if (key === 'Enter' && taskId) {
            const value = target.defaultValue;

            value && value.charCodeAt(0) !== 10 && dispatch(saveTask(taskListId, taskId));
        }
    };

    const foo = taskListId => (draggableTaskListId, taskId, droppableTaskId) => dispatch(sortTask(taskListId, draggableTaskListId, taskId, droppableTaskId));

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
                        <Container>
                            {
                                taskLists.map(taskList => (
                                    <Droppable
                                        key={ taskList.id }
                                        dragType='drag-list'
                                        droppableTaskListId={ taskList.id }
                                        handleDrop={ draggableTaskListId => dispatch(sortList(taskList.id, draggableTaskListId)) }
                                        // handleSort1={ () => console.log('BooooM') }
                                        // handleDrop={ foo(taskList.id) }
                                    >
                                        <Draggable
                                            key={ taskList.id }
                                            draggableTaskListId={ taskList.id }
                                        >
                                            <Droppable
                                                key={taskList.id}
                                                dragType='drag-task'
                                                droppableTaskListId={ taskList.id }
                                                handleDrop={(draggableTaskListId, taskId) => dispatch(moveTask(taskList.id, draggableTaskListId, taskId))}
                                            >
                                                <TaskList
                                                    {...taskList}
                                                    handleChangeListName={value => dispatch(nameTaskList(value, taskList.id))}
                                                    handleSaveListName={() => dispatch(saveTaskList(taskList.id))}
                                                    handleCancelListName={() => dispatch(cancelTaskListCreation(taskList.id))}

                                                    handleCreateTask={() => dispatch(createTask(taskList.id))}

                                                    handleChangeTaskName={taskId => value => dispatch(nameTask(value, taskList.id, taskId))}
                                                    handleSaveTaskName={taskId => () => dispatch(saveTask(taskList.id, taskId))}
                                                    handleCancelTaskName={taskId => () => dispatch(cancelTaskCreation(taskList.id, taskId))}

                                                    handleKeyUp={ taskId => event => keyBoardHandler(event, taskList.id, taskId) }

                                                    // handleSort={ (draggableTaskListId, taskId, droppableTaskId) => dispatch(sortTask(taskList.id, draggableTaskListId, taskId, droppableTaskId)) }
                                                    handleSort={ foo(taskList.id) }
                                                />
                                            </Droppable>
                                        </Draggable>
                                    </Droppable>

                                    // <Droppable
                                    //     key={taskList.id}
                                    //     handleDrop={(draggableTaskListId, taskId) => dispatch(moveTask(taskList.id, draggableTaskListId, taskId))}
                                    // >
                                    //     <TaskList
                                    //         {...taskList}
                                    //         handleChangeListName={value => dispatch(nameTaskList(value, taskList.id))}
                                    //         handleSaveListName={() => dispatch(saveTaskList(taskList.id))}
                                    //         handleCancelListName={() => dispatch(cancelTaskListCreation(taskList.id))}
                                    //
                                    //         handleCreateTask={() => dispatch(createTask(taskList.id))}
                                    //
                                    //         handleChangeTaskName={taskId => value => dispatch(nameTask(value, taskList.id, taskId))}
                                    //         handleSaveTaskName={taskId => () => dispatch(saveTask(taskList.id, taskId))}
                                    //         handleCancelTaskName={taskId => () => dispatch(cancelTaskCreation(taskList.id, taskId))}
                                    //
                                    //         handleKeyUp={ taskId => event => keyBoardHandler(event, taskList.id, taskId) }
                                    //
                                    //         handleSort={ (draggableTaskListId, taskId, droppableTaskId) => dispatch(sortTask(taskList.id, draggableTaskListId, taskId, droppableTaskId)) }
                                    //     />
                                    // </Droppable>
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
