import {
    LIST_ID_NUMBER,
    TASK_ID_NUMBER,

    ADD_NEW_LIST,
    NAME_NEW_LIST,
    SAVE_NEW_LIST,
    CANCEL_NEW_LIST,
    CREATE_NEW_TASK,
    NAME_NEW_TASK,
    SAVE_NEW_TASK,
    CANCEL_NEW_TASK,
} from '../../constants/action.constants';

let listIdCounter = LIST_ID_NUMBER;
let taskIdCounter = TASK_ID_NUMBER;

export const createList = () => (
    {
        type: ADD_NEW_LIST,
        payload: {
            summary: '',
            tasks: [],
            placeholder: 'Please, name your list',
            listId: ++listIdCounter,
            dateTime: new Date().toLocaleString(),
            isNewList: true,
        },
    }
);

export const nameList = (value, listId) => (
    {
        type: NAME_NEW_LIST,
        payload: {
            summary: value,
            listId,
        },
    }
);

export const saveList = (listId) => (
    {
        type: SAVE_NEW_LIST,
        payload: {
            isNewList: false,
            listId,
        },
    }
);

export const cancelListCreation = (listId) => (
    {
        type: CANCEL_NEW_LIST,
        payload: {
            listId,
        },
    }
);

export const createTask = (listId) => (
    {
        type: CREATE_NEW_TASK,
        payload: {
            description: '',
            placeholder: 'Please, add description for your task',
            taskId: ++taskIdCounter,
            dateTime: new Date().toLocaleString(),
            isNewTask: true,
            listId,
        },
    }
);

export const nameTask = (value, listId, taskId) => (
    {
        type: NAME_NEW_TASK,
        payload: {
            description: value,
            listId,
            taskId,
        },
    }
);

export const saveTask = (listId, taskId) => (
    {
        type: SAVE_NEW_TASK,
        payload: {
            isNewTask: false,
            listId,
            taskId,
        },
    }
);

export const cancelTaskCreation = (listId, taskId) => (
    {
        type: CANCEL_NEW_TASK,
        payload: {
            listId,
            taskId
        },
    }
);
