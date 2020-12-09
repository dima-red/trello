import React from "react";
import { useDispatch } from 'react-redux'
import withStyles from "react-jss";
import Typography from "../../atomic-jss-components/Typography/Typography.jsx";
import Task from "../Task/Task.jsx";
import Button from "../../atomic-jss-components/Button/Button.jsx";
import { nameList, saveList, cancelListCreation } from "../../views/BoardView/actions";
import styles from "./styles.js";

const handleListNameChange = (event, dispatch, id) => {
    const value = event.target.value;
    dispatch(nameList(value, id));
};
const handleOkButton = (dispatch, id) => {
    dispatch(saveList(id));
};

const handleCancelButton = (dispatch, id) => {
    dispatch(cancelListCreation(id));
};

const renderListNameCreation = (classes, summary, id, placeholder) => {
    const dispatch = useDispatch();

    return (
        <div className={ classes.summary }>
            <input type="text" value={ summary } className={classes.listNameInput} onChange={ event => handleListNameChange(event, dispatch, id) } placeholder={placeholder} />
            <Button text={"✔"} classNameProps={ classes.listNameButton } onClick={ () => handleOkButton(dispatch, id) } />
            <Button text={"✖"} classNameProps={ classes.listNameButton } onClick={ () => handleCancelButton(dispatch, id) } />
        </div>
    );
};


const List = ({ classes, props }) => {
    const {summary, description, dateTime, isNewList = false, placeholder, id, isEmptyList = true, tasks} = props;

    return (
        <div className={classes.listWrapper}>
            {
                isNewList ? renderListNameCreation(classes, summary, id, placeholder) : <Typography variant={'summary'} value={ summary }/>
            }
            {
                !!tasks && !!tasks.length && tasks.map(task => (
                    <Task description={ task.description }/>
                ))
            }
            <div className={ classes.listFooter }>
                <Button text={"Add Task"} classNameProps={ classes.addTaskButton } onClick={() => console.log('Add Task')}/>
                <Typography variant={'date'} value={ dateTime }/>
            </div>
        </div>
    );
};

const StylesList = withStyles(styles)(List);

export default StylesList;
