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
    moveTask
} from './actions';
import Button from '../../atomic-components/Button/Button.jsx';
import TaskList from '../../components/TaskList/TaskList.jsx';
import Logo from '../../components/Logo/Logo.jsx';
import Container from '../../components/Container/Container.jsx';
import Droppable from "../../components/Droppable/Droppable.jsx";
import styles from './styles';

// const dragStart = (dataTransfer, outgoingListId, taskId) => {
//     dataTransfer.setData('text/plain', id);
//     console.log('dragStart', id);
// };
//
// const drop = (dataTransfer, tasks, incomingListId, dispatch) => {
//     const id = parseInt( dataTransfer.getData('text/plain'));
//     console.log('drop data: ', id);
//     console.log('drop tasksObject: ', tasks);
//
//     if (!tasks[id]) {
//         console.log('Allowed!');
//         dispatch(moveTask(incomingListId, id));
//     } else {
//         console.log('Denied!');
//     }
// };



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
                    <div className={ classes.scrollable }>
                        <Container>
                            {
                                taskLists.map(taskList => (
                                    <Droppable key={ taskList.id } onItemDropped={ item => console.log(item) }>
                                        <TaskList
                                            { ...taskList }
                                            handleChangeListName={ value => dispatch(nameTaskList(value, taskList.id)) }
                                            handleSaveListName={ () => dispatch(saveTaskList(taskList.id)) }
                                            handleCancelListName={ () => dispatch(cancelTaskListCreation(taskList.id)) }

                                            handleCreateTask={ () => dispatch(createTask(taskList.id)) }

                                            handleChangeTaskName={ taskId => value => dispatch(nameTask(value, taskList.id, taskId)) }
                                            handleSaveTaskName={ taskId => () => dispatch(saveTask(taskList.id, taskId)) }
                                            handleCancelTaskName={ taskId => () => dispatch(cancelTaskCreation(taskList.id, taskId)) }

                                            // handleDrop={ dataTransfer => drop(dataTransfer, taskList.tasks, taskList.id, dispatch) }
                                            // handleDragOver={ event => event.preventDefault() }
                                            // handleDragStart={ listTd => taskId => dataTransfer => dragStart(dataTransfer, listTd, taskId) }
                                        />
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
