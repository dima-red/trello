import React from "react";
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import {cancelListCreation, nameList, saveList} from "../../views/BoardView/actions";
import Typography from '../../atomic-jss-components/Typography/Typography.jsx';
import NameCreation from "../NameCreation/NameCreation.jsx";
import Button from "../../atomic-jss-components/Button/Button.jsx";
import styles from "./styles.js";

// const renderTaskNameCreation = (classes, description, listId, placeholder, handler) => {
//
//     return (
//         <div className={ classes.description }>
//             <textarea
//                 type="text"
//                 value={ description }
//                 className={classes.listNameInput}
//                 onChange={ event => handler(nameTask(event.target.value, listId)) }
//                 placeholder={ placeholder }
//             />
//             <Button
//                 text={"✔"}
//                 classNameProps={ classes.createTaskButton }
//                 onClick={ () => handler(saveList(listId)) }
//             />
//             <Button
//                 text={"✖"}
//                 classNameProps={ classes.createTaskButton }
//                 isAlertColor={ true }
//                 onClick={ () => handler(cancelListCreation(listId)) }
//             />
//         </div>
//     );
// };

const Task = ({ classes, description, isNewTask, listId, placeholder, changeHandler }) => {

    return (
        // isNewTask ? renderTaskNameCreation(classes, description, listId, placeholder, changeHandler) : <Typography variant={'description'} value={ description }/>
        isNewTask
            // ? renderTaskNameCreation(classes, description, listId, placeholder, changeHandler)
            ? <NameCreation
                classes={classes}
                text={summary}
                variant='short'
                listId={listId}
                placeholder={placeholder}
                changeHandler={changeHandler}
                handleChange={ nameList }
                handleSave={ saveList }
                handleCancel={ cancelListCreation }
            />
            : <Typography variant={'description'} value={ description }/>
    );
};

Task.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    description: PropTypes.string,
    isNewTask: PropTypes.bool.isRequired,
    placeholder: PropTypes.string.isRequired,
    listId: PropTypes.number.isRequired,
    changeHandler: PropTypes.func.isRequired,
};

const StyledList = withStyles(styles)(Task);

export default StyledList;
