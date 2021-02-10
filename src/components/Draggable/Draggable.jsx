import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Draggable = ({ children, data }) => {
    const handleDragStart = (event) => {
        console.log('startDrag Draggable', data);

        event.dataTransfer.setData(data.type, JSON.stringify(data));
        event.stopPropagation();
    };

    return (
        <div draggable onDragStart={ handleDragStart } >
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
