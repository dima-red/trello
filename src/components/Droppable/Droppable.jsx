import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Droppable = ({ children, handleDrop, data }) => {

    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    const drop = (event) => {
        const transferredData = data.dropTypes
            .map(type => event.dataTransfer.getData(type))
            .find(item => item.length);

        const parsedData = JSON.parse(transferredData);

        const type = parsedData.type;

        if (type === 'task') {
            const action = parsedData.draggableTaskListId === data.droppableTaskListId ? 'sort' : 'move';

            handleDrop[type][action]({ ...parsedData, ...data });
            event.stopPropagation();
        } else {
            handleDrop[type]?.({ ...parsedData, ...data });
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
    data: PropTypes.object,
    handleDrop: PropTypes.func,
};

const StyledDroppable = withStyles(styles)(Droppable);

export default StyledDroppable;

