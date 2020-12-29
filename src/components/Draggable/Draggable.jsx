import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Draggable = ({ classes, children, dataItem }) => {
    const startDrag = ({ dataTransfer }) => {
        dataTransfer.setData("drag-item", dataItem);
        console.log('Drag Start');
    };

    return (
        <div draggable onDragStart={ startDrag } >
            { children }
        </div>
    )
};

Draggable.defaultProps = {};

Draggable.propTypes = {};

const StyledDraggable = withStyles(styles)(Draggable);

export default StyledDraggable;
