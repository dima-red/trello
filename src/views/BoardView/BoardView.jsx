import React from 'react';
import withStyles from 'react-jss';
import classNames from 'classnames';
import { createList } from "./actions";
import Button from '../../atomic-jss-components/Button/Button.jsx';
import List from '../../components/List/List.jsx';
import styles from './styles';

import { useSelector, useDispatch } from 'react-redux'

const BoardView = ({classes}) => {
    const buttonClassNames = classNames(
        classes.headerBtn,
        classes.addBtn,
    );
    const lists = useSelector(state => state.lists);
    const dispatch = useDispatch();

    console.info("Store.lists : ", lists);

    return (
        <div className={ classes.app }>
            <div className={ classes.appContainer }>
                <header className={ classes.appHeader }>
                    <div className={ classes.headerLeft }>
                        <Button text={ 'Boards' } classNameProps={ classes.headerBtn } onClick={() => console.log('Add Board')}/>
                    </div>
                    <div className={ classes.headerRight }>
                        <Button text={ '+' } classNameProps={ buttonClassNames } onClick={ () => dispatch(createList())}/>
                        <div className={ classes.logoWrapper }>
                            <div className={ classes.appLogo }>DG</div>
                        </div>
                    </div>
                </header>
                <main>
                    <div className={ classes.mainContainer }>
                        <div className={ classes.boardContent }>
                            {
                                lists.map(list => (
                                    <List { ...list } />
                                ))
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};

const StyledBoardView = withStyles(styles)(BoardView);

export default StyledBoardView;
