import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Droppable = ({ children, handleDrop, handleAction, handleEventPropagation, data }) => {

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
        const action = handleAction(parsedData, data);

        handleDrop[type]?.[action]({ ...parsedData, ...data });
        handleEventPropagation(parsedData, event);
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

