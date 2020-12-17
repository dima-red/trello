import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import withStyles from 'react-jss';
import classNames from 'classnames';
import {
    cancelListCreation,
    cancelTaskCreation,
    createList,
    createTask,
    nameList,
    nameTask,
    saveList,
    saveTask
} from "./actions";
import Button from '../../atomic-components/Button/Button.jsx';
import List from '../../components/List/List.jsx';
import Logo from "../../components/Logo/Logo.jsx";
import styles from './styles';

const BoardView = ({ classes }) => {
    const buttonClassNames = classNames(
        classes.headerBtn,
        classes.addBtn,
    );
    const lists = Object.values(useSelector(state => state.boardViewReducer.lists));
    const dispatch = useDispatch();

    console.info("Store.lists : ", useSelector(state => state.boardViewReducer.lists));

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
                            onClick={ () => dispatch(createList())}
                        />
                        <Logo />
                    </div>
                </header>
                <main>
                    <div className={ classes.mainContainer }>
                        <div className={ classes.boardContent }>
                            {
                                lists.map(list => (
                                    <List
                                        { ...list }
                                        handleChangeListName={ (value, listId) => dispatch(nameList(value, listId)) }
                                        handleSaveListName={ (listId) => dispatch(saveList(listId)) }
                                        handleCancelListName={ (listId) => dispatch(cancelListCreation(listId)) }

                                        handleCreateTask={ () => dispatch(createTask(list.listId)) }

                                        handleChangeTaskName={ (value, listId, taskId) => dispatch(nameTask(value, listId, taskId)) }
                                        handleSaveTaskName={ (listId, taskId) => dispatch(saveTask(listId, taskId)) }
                                        handleCancelTaskName={ (listId, taskId) => dispatch(cancelTaskCreation(listId, taskId)) }

                                        key={list.listId}
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
