import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux'
import withStyles from 'react-jss';
import classNames from 'classnames';
import { createList } from "./actions/actions";
import Button from '../../atomic-jss-components/Button/Button.jsx';
import List from '../../components/List/List.jsx';
import Logo from "../../components/Logo/Logo.jsx";
import styles from './styles';

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
            <div className={ classes.viewWrapper }>
                <header className={ classes.appHeader }>
                    <div className={ classes.headerLeft }>
                        <Button
                            text={ 'Boards' }
                            classNameProps={ classes.headerBtn }
                            onClick={() => console.log('Add Board')}
                        />
                    </div>
                    <div className={ classes.headerRight }>
                        <Button
                            text={ '+' }
                            classNameProps={ buttonClassNames }
                            onClick={ () => dispatch(createList())}
                        />
                        <Logo />
                    </div>
                </header>
                <main>
                    <div className={ classes.mainContainer }>
                        <div className={ classes.boardContent }>
                            {
                                lists.map(list => (
                                    <List { ...list } changeHandler={dispatch} key={list.listId} />
                                ))
                            }
                        </div>
                    </div>
                </main>
            </div>
        </div>
    )
};

BoardView.propTypes = {
    classes: PropTypes.shape({}).isRequired,
};

const StyledBoardView = withStyles(styles)(BoardView);

export default StyledBoardView;
