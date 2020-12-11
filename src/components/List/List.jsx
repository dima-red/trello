import React from "react";
import { useDispatch } from 'react-redux'
import withStyles from "react-jss";
import Typography from "../../atomic-jss-components/Typography/Typography.jsx";
import Task from "../Task/Task.jsx";
import Button from "../../atomic-jss-components/Button/Button.jsx";
import { nameList, saveList, cancelListCreation, createTask } from "../../views/BoardView/actions";
import styles from "./styles.js";
import classNames from "classnames";

const renderListNameCreation = (classes, summary, listId, placeholder, dispatch) => {

    return (
        <div className={ classes.summary }>
            <input type="text" value={ summary } className={classes.listNameInput} onChange={ event => dispatch(nameList(event.target.value, listId)) } placeholder={placeholder} />
            <Button text={"✔"} classNameProps={ classes.listNameButton } onClick={ () => dispatch(saveList(listId)) } />
            <Button text={"✖"} classNameProps={ classes.listNameButton } isCancel={ true } onClick={ () => dispatch(cancelListCreation(listId)) } />
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
            <textarea type="text" value={ task.description } className={classes.listNameInput} onChange={ event => dispatch(nameTask(event.target.value, listId)) } placeholder={ task.placeholder } />
            <Button text={"✔"} classNameProps={ taskNameButtonClasses } onClick={ () => dispatch(saveList(listId)) } />
            <Button text={"✖"} classNameProps={ taskNameButtonClasses } isCancel={ true } onClick={ () => dispatch(cancelListCreation(listId)) } />
        </div>
    );
};


const List = ({ classes, summary, dateTime, isNewList = false, placeholder, listId, tasks }) => {
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
                <Button text={"Add Task"} classNameProps={ classes.addTaskButton } onClick={() => dispatch(createTask(listId))}/>
                <Typography variant={'date'} value={ dateTime }/>
            </div>
        </div>
    );
};

const StylesList = withStyles(styles)(List);

export default StylesList;
