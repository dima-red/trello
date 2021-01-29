import React from 'react';
import withStyles from 'react-jss';
import styles from './styles';

const List = ({ classes, children }) => {

    return (
        <div className={ classes.listWrapper }>
            { children }
        </div>
    )
};

const StyledList = withStyles(styles)(List);

export default StyledList;

