import React from "react";
import withStyles from 'react-jss';
import classNames from 'classnames';
import styles from "./styles.js";

const Typography = ({ classes, variant, value }) => {
    const typographyClassNames = classNames({
        [classes.summary]: variant === 'summary',
        [classes.description]: variant === 'description',
        [classes.dateTime]: variant === 'date',
    });


    return (
        <div className={ typographyClassNames }>{ value }</div>
    );
};

Typography.defaultProps = {
    variant: 'summary',
    text: '',
    className: '',
};

const StyledTypography = withStyles(styles)(Typography);

export default StyledTypography;
