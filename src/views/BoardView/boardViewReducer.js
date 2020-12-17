import {
    ADD_NEW_LIST,
    NAME_NEW_LIST,
    SAVE_NEW_LIST,
    CANCEL_NEW_LIST,
    CREATE_NEW_TASK,
    NAME_NEW_TASK,
    SAVE_NEW_TASK,
    CANCEL_NEW_TASK,
} from './action.constants';

const initialState = {
    lists: {
        0: {
            summary: 'ToDo',
            tasks: {
                0: {
                    description: 'To do something important!',
                    taskId: 0,
                },
                1: {
                    description: 'To do something another important!',
                    taskId: 1,
                }
            },
            dateTime: '11/18/2020, 3:06:49 PM',
            listId: 0,
        },
        1: {
            summary: 'In Progress',
            tasks: {
                2: {
                    description: 'Something important is in progress!',
                    taskId: 2,
                },
                3: {
                    description: 'Something important is in progress!',
                    taskId: 3,
                }
            },
            dateTime: '11/19/2020, 4:06:49 PM',
            listId: 1,
        }
    },
};

const boardViewReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_NEW_LIST:
        return {
            lists: {
                ...state.lists,
                [payload.listId]: {
                    ...payload,
                }
            },
        };
    case NAME_NEW_LIST:
        return {
            lists: {
                ...state.lists,
                [payload.listId]: {
                    ...state.lists[payload.listId],
                    summary: payload.summary,
                },
            },
        };
    case SAVE_NEW_LIST:
        return {
            lists: {
                ...state.lists,
                [payload.listId]: {
                    ...state.lists[payload.listId],
                    isNewList: payload.isNewList,
                },
            },
        };
    case CANCEL_NEW_LIST: {
        const listsCopy = Object.assign({}, state.lists);

        delete listsCopy[payload.listId];

        return {
            lists: listsCopy,
        };
    }

    case CREATE_NEW_TASK: {
        const listsCopy = Object.assign({}, state.lists);

        listsCopy[payload.listId].tasks[payload.taskId] = payload;

        return {
            lists: listsCopy
        };
    }

    case NAME_NEW_TASK: {
        const listsCopy = Object.assign({}, state.lists);

        listsCopy[payload.listId].tasks[payload.taskId].description = payload.description;

        return {
            lists: listsCopy,
        };
    }

    case SAVE_NEW_TASK: {
        const listsCopy = Object.assign({}, state.lists);
        console.log(payload);
        console.log(listsCopy[payload.listId].tasks);

        listsCopy[payload.listId].tasks[payload.taskId].isNewTask = payload.isNewTask;

        return {
            lists: listsCopy,
        };
    }

    case CANCEL_NEW_TASK: {
        const listsCopy = Object.assign({}, state.lists);

        delete listsCopy[payload.listId].tasks[payload.taskId];

        return {
            lists: listsCopy,
        };
    }

    default:
        return state;
    }
};

export default boardViewReducer;
