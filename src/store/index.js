import { createStore } from 'redux';
import rootReducer from '../reducers';

const composeEnhancers =
    typeof window === 'object' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
        }) : compose;

const configureStore = () => {
    return createStore(
        rootReducer
    );
};

export default configureStore;
