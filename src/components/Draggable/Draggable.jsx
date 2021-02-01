import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Draggable = ({ children, data }) => {
    const handleDragStart = (event) => {
        console.log('startDrag Draggable', event);
        // console.log('startDrag Draggable', event.target.attributes.type.value);

        event.dataTransfer.setData(data.type, JSON.stringify({
            draggableTaskListId: data.draggableTaskListId,
            draggableTaskId: data.taskId
        }));
    };

    return (
        <div draggable onDragStart={ handleDragStart } type='TEST2222222222222' >
            { children }
        </div>
    )
};

Draggable.defaultProps = {};

Draggable.propTypes = {
    data: PropTypes.object,
};

const StyledDraggable = withStyles(styles)(Draggable);

export default StyledDraggable;
