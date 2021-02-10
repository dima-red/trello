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
    sortTask,
    moveTask,
    sortList,
} from './actions';
import Button from '../../components/Button/Button.jsx';
import TaskList from '../../components/TaskList/TaskList.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import Container from '../../components/Container/Container.jsx';
import Droppable from '../../components/Droppable/Droppable.jsx';
import Draggable from '../../components/Draggable/Draggable.jsx';
import { dropHelper, withCallback } from './helpers';
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
                                        data={{
                                            dropTypes: ['task-list', 'task'],
                                            droppableTaskListId: index,
                                            handlePropagation: event => event.stopPropagation(),
                                        }}
                                        handleDrop={{
                                            'task-list': data => dispatch(sortList(data)),
                                            'task': {
                                                'move': data => dispatch(moveTask(data)),
                                            }
                                        }}
                                    >
                                        <Draggable
                                            data={{
                                                type: 'task-list',
                                                draggableTaskListId: index,
                                                draggedData: {
                                                    taskList
                                                }
                                            }}
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

                                                handleSort={{
                                                    'task': {
                                                        'move': data => dispatch(moveTask(data)), // for case when user drags task from the one taskList on the task on another taskList
                                                        'sort': data => dispatch(sortTask(data)),
                                                    },
                                                }}
                                            />
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
