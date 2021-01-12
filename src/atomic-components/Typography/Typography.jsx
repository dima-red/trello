import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from './styles.js';

const typographyClassesMAP = {
    summary: 'summary',
    description: 'description',
    date: 'dateTime',
};

const Typography = ({ classes, variant, text }) => {
    const typographyClassNames = classNames(
        classes[typographyClassesMAP[variant]]
    );

    return (
        <div className={ typographyClassNames }>
            <span id='TEST-TEST-TEST' className={ classes.text }>{ text }</span>
        </div>
    );
};

Typography.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    variant: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
};

Typography.defaultProps = {
    text: '',
    variant: 'summary',
    className: '',
};

const StyledTypography = withStyles(styles)(Typography);

export default StyledTypography;
