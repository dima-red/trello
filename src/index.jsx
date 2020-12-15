import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import configureStore from './store';
import BoardView from './views/BoardView';
import './index.css';

const store = configureStore();

ReactDOM.render(
    <Provider store={ store }>
        <BoardView />
    </Provider>,
    document.getElementById('root')
);
