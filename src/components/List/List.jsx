import React from "react";
import withStyles from 'react-jss';
import Typography from '../../atomic-jss-components/Typography/Typography.jsx';
import styles from "./styles.js";

const List = ({ classes, props }) => {
    const {summary, description, dateTime} = props;

    return (
        <div className={classes.listWrapper}>
            <Typography variant={'summary'} value={ summary }/>
            <Typography variant={'description'} value={ description }/>
            <Typography variant={'date'} value={ dateTime }/>
        </div>
    );
};

const StylesList = withStyles(styles)(List);

export default StylesList;
