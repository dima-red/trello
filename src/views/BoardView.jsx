import React from 'react';
import Button from '../components/Button/Button.jsx';
import List from '../components/List/List.jsx';
import { styles } from './styles';

const BoardView = () => {
    const classes = styles();

    return (
        <div className={ classes.app }>
            <div className={ classes.appContainer }>
                <header className={ classes.appHeader }>
                    <div className={ classes.headerLeft }>
                        <Button text={ 'Boards' } displayProps={ classes.headerBtn } cb={()=>console.log('Add Board')}/>
                    </div>
                    <div className={ classes.headerRight }>
                        <Button text={ '+' } displayProps={ `${classes.headerBtn} ${classes.addBtn}` } cb={()=>console.log('Add List')}/>
                        <div className={ classes.logoWrapper }>
                            <div className={ classes.appLogo }>DG</div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className={ classes.boardContent }>
                        <List />
                    </div>
                </main>
            </div>
        </div>
    )
};

export default BoardView;
