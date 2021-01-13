import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Sortable = ({ classes, children, handleSort, sortableId }) => {

    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const drop = ({ dataTransfer }) => {
        const { draggableTaskListId, taskId } = JSON.parse(dataTransfer.getData('drag-data'));
        handleSort(draggableTaskListId, taskId, sortableId);
    };

    return (
        <div onDragOver={ dragOver } onDrop={ drop } >
            { children }
        </div>
    )
};

Sortable.defaultProps = {};

Sortable.propTypes = {};

const StyledSortable = withStyles(styles)(Sortable);

export default StyledSortable;

