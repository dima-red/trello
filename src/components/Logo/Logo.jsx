import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import styles from './styles';

const Logo = ({ classes }) => {

    return (
        <div className={ classes.logoWrapper }>
            <div className={ classes.appLogo }>DG</div>
        </div>
    )
};

Logo.defaultProps = {
    isCancel: false,
};

Logo.propTypes = {
    classes: PropTypes.shape({
        logoWrapper: PropTypes.string,
        appLogo: PropTypes.string,
    }).isRequired,
};

const StyledLogo = withStyles(styles)(Logo);

export default StyledLogo;
