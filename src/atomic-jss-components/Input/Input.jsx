import React from "react";
import withStyles from 'react-jss';
import { useDispatch } from 'react-redux'
import { nameList } from "../../views/BoardView/actions";
import { saveList } from "../../views/BoardView/actions";
import classNames from 'classnames';
import styles from "./styles.js";

const handleInputChange = (event, dispatch, id) => {
    const value = event.target.value;
    dispatch(nameList(value, id));
};
const handleOkButton = (dispatch, id) => {
    dispatch(saveList(id));
};

const handleCancelButton = (dispatch, id) => {

};

const Input = ({ classes, value, placeholder, id}) => {
    const dispatch = useDispatch();

    return (
        <div className={ classes.summary }>
            <input type="text" value={ value } onChange={ event => handleInputChange(event, dispatch, id) } placeholder={placeholder} />
            <button onClick={ () => handleOkButton(dispatch, id) } >Ok</button>
            <button onClick={ handleCancelButton }>Cancel</button>
        </div>
    );
};

Input.defaultProps = {

};

const StyledInput = withStyles(styles)(Input);

export default StyledInput;
