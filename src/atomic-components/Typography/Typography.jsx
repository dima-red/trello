import React from "react";
import PropTypes from 'prop-types';
import withStyles from "react-jss";
import classNames from "classnames";
import styles from "./styles.js";

const typographyClassesMAP = {
    summary: 'summary',
    description: 'description',
    date: 'dateTime',
};

const Typography = ({ classes, variant, value }) => {
    const typographyClassNames = classNames(
        classes[typographyClassesMAP[variant]]
    );

    return (
        <div className={ typographyClassNames }>
            <span>{ value }</span>
        </div>
    );
};

Typography.propTypes = {
    classes: PropTypes.shape({}).isRequired,
    variant: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
};

Typography.defaultProps = {
    value: '',
    variant: 'summary',
    text: '',
    className: '',
};

const StyledTypography = withStyles(styles)(Typography);

export default StyledTypography;
