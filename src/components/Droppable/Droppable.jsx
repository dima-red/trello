import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Droppable = ({ classes, children, handleDrop }) => {

    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const drop = ({ dataTransfer }) => {
        console.log('drop Droppable');
        const transferredData = dataTransfer.getData('drag-data');
        if (transferredData) {
            const { draggableTaskListId, taskId } = JSON.parse(transferredData);
            handleDrop(draggableTaskListId, taskId);
        }
    };

    return (
        <div onDragOver={ dragOver } onDrop={ drop } >
            { children }
        </div>
    )
};

Droppable.defaultProps = {};

Droppable.propTypes = {};

const StyledDroppable = withStyles(styles)(Droppable);

export default StyledDroppable;

