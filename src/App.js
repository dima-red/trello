import  React from 'react';
// import './styles.scss';
import { styles } from './styles';

const App = () => {
    const classes = styles();
    console.log(classes);

    return (
        <h2 className={classes.test}>Test WW</h2>
    )
};

export default App;
