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
    const taskLists = useSelector(state => state.boardViewReducer.taskLists);
    const dispatch = useDispatch();

    console.info('Store.taskLists : ', taskLists);

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
                                taskLists.map((taskList, index) => (
                                    <Droppable
                                        key={ taskList.id }
                                        options={{
                                            droppableTaskListId: taskList.id,
                                        }}
                                        type='drag-list'
                                        handleDrop={ draggableTaskListId => dispatch(sortList(index, draggableTaskListId)) }
                                    >
                                        <Draggable
                                            type='drag-list'
                                            options={{
                                                draggableTaskListId: index,
                                            }}
                                        >
                                            <Droppable
                                                options={{
                                                    droppableTaskListId: index,
                                                    handlePropagation: event => event.stopPropagation(),
                                                }}
                                                type='drag-task'
                                                handleDrop={(draggableTaskListId, taskId) => dispatch(moveTask(index, draggableTaskListId, taskId))}
                                            >
                                                <TaskList
                                                    {...taskList}
                                                    id={ index }
                                                    handleChangeListName={ ({ target: { value } }) => dispatch(nameTaskList(value, index)) }
                                                    handleSaveListName={ () => dispatch(saveTaskList(index))}
                                                    handleCancelListName={ () => dispatch(cancelTaskListCreation(index)) }

                                                    handleCreateTask={ () => dispatch(createTask(index)) }

                                                    handleChangeTaskName={ taskId => ({ target: { value } }) => dispatch(nameTask(value, index, taskId)) }
                                                    handleSaveTaskName={ taskId => () => dispatch(saveTask(index, taskId)) }
                                                    handleCancelTaskName={ taskId => () => dispatch(cancelTaskCreation(index, taskId)) }

                                                    handleSort={ (draggableTaskListId, taskId, droppableTaskId) => dispatch(sortTask(index, draggableTaskListId, taskId, droppableTaskId)) }
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
