import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
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
} from "./actions";
import Button from '../../atomic-components/Button/Button.jsx';
import TaskList from '../../components/TaskList/TaskList.jsx';
import Logo from "../../components/Logo/Logo.jsx";
import styles from './styles';

const BoardView = ({ classes }) => {
    const buttonClassNames = classNames(
        classes.headerBtn,
        classes.addBtn,
    );
    const taskLists = Object.values(useSelector(state => state.boardViewReducer.taskLists));
    console.log(taskLists);
    const dispatch = useDispatch();

    console.info("Store.taskLists : ", useSelector(state => state.boardViewReducer.taskLists));

    return (
        <div className={ classes.app }>
            <div className={ classes.viewWrapper }>
                <header className={ classes.appHeader }>
                    <div className={ classes.headerLeft }>
                        <Button
                            text={ 'Boards' }
                            classNameProps={ classes.headerBtn }
                            onClick={() => console.log('Add Board')}
                        />
                    </div>
                    <div className={ classes.headerRight }>
                        <Button
                            text={ '+' }
                            classNameProps={ buttonClassNames }
                            onClick={ () => dispatch(createTaskList())}
                        />
                        <Logo />
                    </div>
                </header>
                <main>
                    <div className={ classes.mainContainer }>
                        <div className={ classes.boardContent }>
                            {
                                taskLists.map(taskList => (
                                    <TaskList
                                        { ...taskList }
                                        handleChangeListName={ (value, taskListId) => dispatch(nameTaskList(value, taskListId)) }
                                        handleSaveListName={ (taskListId) => dispatch(saveTaskList(taskListId)) }
                                        handleCancelListName={ (taskListId) => dispatch(cancelTaskListCreation(taskListId)) }

                                        handleCreateTask={ () => dispatch(createTask(taskList.taskListId)) }

                                        handleChangeTaskName={ (value, taskListId, taskId) => dispatch(nameTask(value, taskListId, taskId)) }
                                        handleSaveTaskName={ (taskListId, taskId) => dispatch(saveTask(taskListId, taskId)) }
                                        handleCancelTaskName={ (taskListId, taskId) => dispatch(cancelTaskCreation(taskListId, taskId)) }

                                        key={ taskList.taskListId }
                                    />
                                ))
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};

BoardView.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};

const StyledBoardView = withStyles(styles)(BoardView);

export default StyledBoardView;
