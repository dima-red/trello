import React from "react";
import withStyles from "react-jss";
import styles from "./styles";

const Logo = ({ classes,}) => {

    return (
        <div className={ classes.logoWrapper }>
            <div className={ classes.appLogo }>DG</div>
        </div>
    )
};

Logo.defaultProps = {
    isCancel: false,
};

const StyledLogo = withStyles(styles)(Logo);

export default StyledLogo;
