import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Droppable = ({ classes, children, dragType, handleDrop, sortableId, droppableTaskListId }) => {

    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const drop = (event) => {
        console.log('drop Droppable: ', dragType);
        const transferredData = event.dataTransfer.getData(dragType);
        if (transferredData) {
            const { draggableTaskListId, taskId } = JSON.parse(transferredData);
            handleDrop(draggableTaskListId, taskId, sortableId);
            console.log(droppableTaskListId, draggableTaskListId, taskId, sortableId);

            if (droppableTaskListId !== draggableTaskListId && taskId && !sortableId) {
                event.stopPropagation();
            }
        }
    };

    return (
        <div onDragOver={ dragOver } onDrop={ drop } >
            { children }
        </div>
    )
};

Droppable.defaultProps = {
    sortableId: null,
};

Droppable.propTypes = {};

const StyledDroppable = withStyles(styles)(Droppable);

export default StyledDroppable;

