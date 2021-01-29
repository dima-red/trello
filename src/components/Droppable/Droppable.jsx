import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Droppable = ({ children, handleDrop, type, options }) => {

    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const drop = (event) => {
        console.log('drop Droppable: ', type, options);
        const transferredData = event.dataTransfer.getData(type);
        if (transferredData) {
            const { draggableTaskListId, taskId } = JSON.parse(transferredData);
            handleDrop(draggableTaskListId, taskId, options.sortableId);
            console.log(options.droppableTaskListId, draggableTaskListId, taskId, options.sortableId);

            if (options.droppableTaskListId !== draggableTaskListId && taskId >= 0 && !options.sortableId && options.sortableId !== 0) {
                options.handlePropagation(event);
            }
        }
    };

    return (
        <div onDragOver={ dragOver } onDrop={ drop } >
            { children }
        </div>
    )
};

Droppable.defaultProps = {};

Droppable.propTypes = {
    type: PropTypes.string,
    options: PropTypes.object,
    handleDrop: PropTypes.func,
};

const StyledDroppable = withStyles(styles)(Droppable);

export default StyledDroppable;

