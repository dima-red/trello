import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Container = ({ classes, children }) => {

    return (
        <div className={ classes.boardContent }>
            {
                children
            }
        </div>
    )
};

Container.defaultProps = {
    isCancel: false,
};

Container.propTypes = {
    classes: PropTypes.shape({

    }).isRequired,
};

const StyledContainer = withStyles(styles)(Container);

export default StyledContainer;
