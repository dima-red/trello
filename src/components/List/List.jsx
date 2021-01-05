import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const List = ({ classes, children }) => {

    return (
        <div className={ classes.listWrapper }>
            { children }
        </div>
    )
};

List.defaultProps = {};

List.propTypes = {};

const StyledList = withStyles(styles)(List);

export default StyledList;

