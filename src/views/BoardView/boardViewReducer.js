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
    taskLists: {
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
            taskListId: 0,
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
            taskListId: 1,
        }
    },
};

const boardViewReducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_NEW_LIST:
        return {
            taskLists: {
                ...state.taskLists,
                [payload.taskListId]: payload,
            },
        };
    case NAME_NEW_LIST: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.taskListId].summary = payload.summary;

        return {
            taskLists: listsCopy,
        };
    }
    case SAVE_NEW_LIST: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.taskListId].isNewList = payload.isNewList;

        return {
            taskLists: listsCopy,
        };
    }
    case CANCEL_NEW_LIST: {
        const listsCopy = Object.assign({}, state.taskLists);

        delete listsCopy[payload.taskListId];

        return {
            taskLists: listsCopy,
        };
    }

    case CREATE_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.taskListId].tasks[payload.taskId] = payload;

        return {
            taskLists: listsCopy
        };
    }

    case NAME_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.taskListId].tasks[payload.taskId].description = payload.description;

        return {
            taskLists: listsCopy,
        };
    }

    case SAVE_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.taskListId].tasks[payload.taskId].isNewTask = payload.isNewTask;

        return {
            taskLists: listsCopy,
        };
    }

    case CANCEL_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        delete listsCopy[payload.taskListId].tasks[payload.taskId];

        return {
            taskLists: listsCopy,
        };
    }

    default:
        return state;
    }
};

export default boardViewReducer;
