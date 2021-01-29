import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from './styles';

const Container = ({ classes, children, options }) => {
    const containerDirectionMap = {
        row: 'horizontal',
        column: 'vertical',
    };

    const containerClasses = classNames(
        classes.container,
        classes[containerDirectionMap[options.direction]],
    );

    return (
        <div className={ containerClasses }>
            {
                children
            }
        </div>
    )
};

Container.defaultProps = {};

Container.propTypes = {
    classes: PropTypes.shape({
        boardContent: PropTypes.string,
    }).isRequired,
};

const StyledContainer = withStyles(styles)(Container);

export default StyledContainer;
