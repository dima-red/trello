import React from "react";
import withStyles from 'react-jss';
import Typography from '../../atomic-jss-components/Typography/Typography.jsx';
import styles from "./styles.js";

const Task = ({ classes, description}) => {

    return (
        <Typography variant={'description'} value={ description }/>
    );
};

const StylesList = withStyles(styles)(Task);

export default StylesList;
