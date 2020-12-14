import React from "react";
import withStyles from 'react-jss';
import classNames from "classnames";
import {cancelListCreation, saveList} from "../../views/BoardView/actions";
import Typography from '../../atomic-jss-components/Typography/Typography.jsx';
import Button from "../../atomic-jss-components/Button/Button.jsx";
import styles from "./styles.js";

const renderTaskNameCreation = (classes, description, listId, placeholder, handler) => {
    const taskNameButtonClasses = classNames(
        classes.createTaskButton,
    );

    return (
        <div className={ classes.description }>
            <textarea
                type="text"
                value={ description }
                className={classes.listNameInput}
                onChange={ event => handler(nameTask(event.target.value, listId)) }
                placeholder={ placeholder }
            />
            <Button
                text={"✔"}
                classNameProps={ taskNameButtonClasses }
                onClick={ () => handler(saveList(listId)) }
            />
            <Button
                text={"✖"}
                classNameProps={ taskNameButtonClasses }
                isCancel={ true }
                onClick={ () => handler(cancelListCreation(listId)) }
            />
        </div>
    );
};

const Task = ({ classes, description, isNewTask, listId, placeholder, changeHandler }) => {

    return (
        isNewTask ? renderTaskNameCreation(classes, description, listId, placeholder, changeHandler) : <Typography variant={'description'} value={ description }/>
    );
};

const StyledList = withStyles(styles)(Task);

export default StyledList;
