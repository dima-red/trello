import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Draggable = ({ classes, children, draggableTaskListId, taskId }) => {
    const startDrag = ({ dataTransfer }) => {
        console.log('startDrag Draggable');
        const dragType = taskId ? 'drag-task' : 'drag-list';
        dataTransfer.setData(dragType, JSON.stringify({ draggableTaskListId, taskId }));
    };

    return (
        <div draggable onDragStart={ startDrag } >
            { children }
        </div>
    )
};

Draggable.defaultProps = {
    taskId: null
};

Draggable.propTypes = {};

const StyledDraggable = withStyles(styles)(Draggable);

export default StyledDraggable;
