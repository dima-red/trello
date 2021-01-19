import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const SortList = ({ classes, children, handleSort1 }) => {

    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const drop = event => {
        console.log('drop SortList');
        const { draggableTaskListId } = JSON.parse(event.dataTransfer.getData('drag-data1'));
        handleSort1(draggableTaskListId);
    };

    return (
        <div onDragOver={ dragOver } onDrop={ drop } >
            { children }
        </div>
    )
};

SortList.defaultProps = {};

SortList.propTypes = {};

const StyledSortList = withStyles(styles)(SortList);

export default StyledSortList;

