import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Droppable = ({ classes, children, onItemDropped }) => {
    const dragOver = event => {
        console.log('Drag Over');
        event.preventDefault();
    };

    const drop = ({ dataTransfer }) => {
        const droppedItem = dataTransfer.getData('drag-item');
        if (droppedItem) {
            console.log('Drop');
            onItemDropped(droppedItem);
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
