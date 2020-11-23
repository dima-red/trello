import React from "react";
import { styles } from "./styles.js";

const List = () => {
    const classes = styles();

    return (
        <div className={classes.listWrapper}>
            <div className={ classes.summary }>Summary</div>
            <div className={ classes.description }>Description</div>
            <span className={ classes.dateTime }>Date & Time</span>
        </div>
    );
}

export default List;
