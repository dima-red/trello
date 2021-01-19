import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const DragList = ({ classes, children, draggableTaskListId }) => {
    const startDrag = ({ dataTransfer }) => {
        console.log('startDrag DragList');
        dataTransfer.setData('drag-data1', JSON.stringify({ draggableTaskListId }));
    };

    return (
        <div draggable onDragStart={ startDrag } >
            { children }
        </div>
    )
};

DragList.defaultProps = {};

DragList.propTypes = {};

const StyledDragList = withStyles(styles)(DragList);

export default StyledDragList;
