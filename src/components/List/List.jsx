import React from "react";
import withStyles from "react-jss";
import Typography from "../../atomic-jss-components/Typography/Typography.jsx";
import Task from "../Task/Task.jsx";
import Input  from "../../atomic-jss-components/Input/Input.jsx";
import Button from "../../atomic-jss-components/Button/Button.jsx";
import styles from "./styles.js";

const List = ({ classes, props }) => {
    const {summary, description, dateTime, isNewList = false, placeholder, id, isEmptyList = true, tasks} = props;

    return (
        <div className={classes.listWrapper}>
            {
                isNewList ? <Input placeholder={placeholder} value={summary} id={id} /> : <Typography variant={'summary'} value={ summary }/>
            }
            {
                !!tasks.length && tasks.map(task => (
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
