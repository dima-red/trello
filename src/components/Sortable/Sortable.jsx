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
        console.log('drop Sortable');
        const transferredData = dataTransfer.getData('drag-data');
        if (transferredData) {
            const { draggableTaskListId, taskId } = JSON.parse(transferredData);
            handleSort(draggableTaskListId, taskId, sortableId);
        }
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

