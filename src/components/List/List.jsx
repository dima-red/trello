import React from "react";
import withStyles from "react-jss";
import Typography from "../../atomic-jss-components/Typography/Typography.jsx";
import Task from "../Task/Task.jsx";
import Button from "../../atomic-jss-components/Button/Button.jsx";
import { nameList, saveList, cancelListCreation, createTask } from "../../views/BoardView/actions";
import styles from "./styles.js";

const renderListNameCreation = (classes, summary, listId, placeholder, handler) => {

    return (
        <div className={ classes.summary }>
            <input
                type="text"
                value={ summary }
                className={classes.listNameInput}
                onChange={ event => handler(nameList(event.target.value, listId)) }
                placeholder={placeholder}
            />
            <Button
                text={"✔"}
                classNameProps={ classes.listNameButton }
                onClick={ () => handler(saveList(listId)) }
            />
            <Button
                text={"✖"}
                classNameProps={ classes.listNameButton }
                isCancel={ true }
                onClick={ () => handler(cancelListCreation(listId)) }
            />
        </div>
    );
};

const List = ({ classes, summary, dateTime, isNewList = false, placeholder, listId, tasks, changeHandler }) => {

    return (
        <div className={classes.listWrapper}>
            {
                isNewList
                    ? renderListNameCreation(classes, summary, listId, placeholder, changeHandler)
                    : <Typography variant={'summary'} value={ summary }/>
            }
            {
                !!tasks.length && tasks.map(task => (
                    <Task
                        {...task}
                        changeHandler={changeHandler}
                    />
                ))
            }
            <div className={ classes.listFooter }>
                <Button
                    text={"Add Task"}
                    classNameProps={ classes.addTaskButton }
                    onClick={() => changeHandler(createTask(listId))}
                />
                <Typography
                    variant={'date'}
                    value={ dateTime }/>
            </div>
        </div>
    );
};

const StyledList = withStyles(styles)(List);

export default StyledList;
