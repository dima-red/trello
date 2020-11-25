import React from 'react';
import { styles } from './styles';

const Button = ({ text, displayProps, cb }) => {
    const classes = styles();

    return (
        <button className={ `${ classes.btn } ${ displayProps }` } onClick={ cb }>
            <span className={ classes.text }>{ text }</span>
        </button>
    )
};

export default Button;
