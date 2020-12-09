import React from "react";
import { useDispatch } from 'react-redux'
import withStyles from "react-jss";
import Typography from "../../atomic-jss-components/Typography/Typography.jsx";
import Task from "../Task/Task.jsx";
import Button from "../../atomic-jss-components/Button/Button.jsx";
import { nameList, saveList, cancelListCreation, createTask } from "../../views/BoardView/actions";
import styles from "./styles.js";
import classNames from "classnames";

const handleListNameChange = (event, dispatch, listId) => {
    const value = event.target.value;
    dispatch(nameList(value, listId));
};
const handleOkButton = (dispatch, listId) => {
    dispatch(saveList(listId));
};

const handleCancelButton = (dispatch, listId) => {
    dispatch(cancelListCreation(listId));
};

const handleCreateTask = (dispatch, listId) => {
    dispatch(createTask(listId));
};

const renderListNameCreation = (classes, summary, listId, placeholder, dispatch) => {

    return (
        <div className={ classes.summary }>
            <input type="text" value={ summary } className={classes.listNameInput} onChange={ event => handleListNameChange(event, dispatch, listId) } placeholder={placeholder} />
            <Button text={"✔"} classNameProps={ classes.listNameButton } onClick={ () => handleOkButton(dispatch, listId) } />
            <Button text={"✖"} classNameProps={ classes.listNameButton } isCancel={ true } onClick={ () => handleCancelButton(dispatch, listId) } />
        </div>
    );
};

const renderTaskNameCreation = (classes, task, listId, dispatch) => {
    const taskNameButtonClasses = classNames(
        classes.listNameButton,
        classes.taskNameButton
    );

    return (
        <div className={ classes.description }>
            <textarea type="text" value={ task.description } className={classes.listNameInput} onChange={ event => handleListNameChange(event, dispatch, listId) } placeholder={ task.placeholder } />
            <Button text={"✔"} classNameProps={ taskNameButtonClasses } onClick={ () => handleOkButton(dispatch, listId) } />
            <Button text={"✖"} classNameProps={ taskNameButtonClasses } isCancel={ true } onClick={ () => handleCancelButton(dispatch, listId) } />
        </div>
    );
};


const List = ({ classes, props }) => {
    const {summary, description, dateTime, isNewList = false, placeholder, listId, isEmptyList = true, tasks} = props;
    const dispatch = useDispatch();

    return (
        <div className={classes.listWrapper}>
            {
                isNewList ? renderListNameCreation(classes, summary, listId, placeholder, dispatch) : <Typography variant={'summary'} value={ summary }/>
            }
            {
                !!tasks && !!tasks.length && tasks.map(task => (
                    task.isNewTask ? renderTaskNameCreation(classes, task, listId, dispatch) : <Task description={ task.description }/>
                ))
            }
            <div className={ classes.listFooter }>
                <Button text={"Add Task"} classNameProps={ classes.addTaskButton } onClick={() => handleCreateTask(dispatch, listId)}/>
                <Typography variant={'date'} value={ dateTime }/>
            </div>
        </div>
    );
};

const StylesList = withStyles(styles)(List);

export default StylesList;
