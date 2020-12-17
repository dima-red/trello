import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import Typography from "../../atomic-components/Typography/Typography.jsx";
import Task from "../Task/Task.jsx";
import Button from "../../atomic-components/Button/Button.jsx";
import SummaryDescriptionMaker from "../SummaryDescriptionMaker/SummaryDescriptionMaker.jsx";
import { nameList, saveList, cancelListCreation, createTask } from "../../views/BoardView/actions/actions";
import styles from "./styles.js";

const List = (props) => {
    const { classes, summary, dateTime, isNewList, placeholder, listId, tasks, changeHandler } = props;

    return (
        <div className={classes.listWrapper}>
            {
                isNewList ?
                    <SummaryDescriptionMaker
                        text={summary}
                        variant='input'
                        listId={listId}
                        placeholder={placeholder}
                        changeHandler={changeHandler}
                        handleChange={ nameList }
                        handleSave={ saveList }
                        handleCancel={ cancelListCreation }
                    /> :
                    <Typography variant={'summary'} value={ summary }/>
            }
            {
                !!tasks.length && tasks.map(task => (
                    <Task
                        key={task.taskId}
                        {...task}
                        changeHandler={ changeHandler }
                    />
                ))
            }
            <div className={ classes.listFooter }>
                <Button
                    text={"Add Task"}
                    classNameProps={ classes.addTaskButton }
                    onClick={() => changeHandler(createTask(listId))}
                    variant='additional'
                />
                <Typography
                    variant={'date'}
                    value={ dateTime }/>
            </div>
        </div>
    );
};

List.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    listWrapper: PropTypes.string,
    summary: PropTypes.string,
    dateTime: PropTypes.string.isRequired,
    isNewList: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    listId: PropTypes.number.isRequired,
    tasks: PropTypes.array.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

List.defaultProps = {
    isNewList: false,
};

const StyledList = withStyles(styles)(List);

export default StyledList;
