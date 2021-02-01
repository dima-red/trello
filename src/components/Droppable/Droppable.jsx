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
        console.log('drop Droppable: ', data);
        const transferredData = event.dataTransfer.getData(data.type);

        if (transferredData) {
            const parsedData = JSON.parse(transferredData);

            handleDrop({ ...parsedData, ...data, event });
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

