import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Droppable = ({ children, handleDrop, data }) => {

    const dragOver = event => {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    };

    // const drop = (event) => {
    //     console.log('drop Droppable: ', data);
    //
    //     const transferredData = event.dataTransfer.getData(data.type);
    //
    //     if (transferredData) {
    //         const parsedData = JSON.parse(transferredData);
    //
    //         handleDrop({ ...parsedData, ...data, event });
    //     }
    // };

    const drop = (event) => {
        console.log('drop Droppable: ', data);

        const types = data.types;
        const parsedData = types.reduce((acc, curr) => {
            const transferredData = event.dataTransfer.getData(curr);

            return transferredData ? acc = [...acc, JSON.parse(transferredData)] : acc;

        }, []);

        return handleDrop({ ...parsedData[0], ...data, event });
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

