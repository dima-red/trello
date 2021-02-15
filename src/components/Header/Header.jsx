import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Header = ({ classes, children }) => (
    <header className={classes.appHeader}>
        <div className={classes.headerLeft}>
            {
                children.filter(({ props }) => props.location === 'left')
            }
        </div>
        <div className={classes.headerRight}>
            {
                children.filter(({ props }) => props.location === 'right')
            }
        </div>
    </header>
);

Header.defaultProps = {};

Header.propTypes = {
    classes: PropTypes.shape({
        appHeader: PropTypes.string,
        headerLeft: PropTypes.string,
        headerRight: PropTypes.string,
    }).isRequired,
};

const StyledHeader = withStyles(styles)(Header);

export default StyledHeader;
