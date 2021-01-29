import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Draggable = ({ children, type, options }) => {
    const handleDragStart = ({ dataTransfer }) => {
        console.log('startDrag Draggable');

        dataTransfer.setData(type, JSON.stringify({
            draggableTaskListId: options.draggableTaskListId,
            taskId: options.taskId
        }));
    };

    return (
        <div draggable onDragStart={ handleDragStart } >
            { children }
        </div>
    )
};

Draggable.defaultProps = {};

Draggable.propTypes = {
    type: PropTypes.string,
    options: PropTypes.object,
};

const StyledDraggable = withStyles(styles)(Draggable);

export default StyledDraggable;
