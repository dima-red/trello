import {
    BOARD_VIEW_LIST_ID_NUMBER,
    BOARD_VIEW_TASK_ID_NUMBER,

    BOARD_VIEW_ADD_NEW_LIST,
    BOARD_VIEW_NAME_NEW_LIST,
    BOARD_VIEW_SAVE_NEW_LIST,
    BOARD_VIEW_CANCEL_NEW_LIST,
    BOARD_VIEW_CREATE_NEW_TASK,
    BOARD_VIEW_NAME_NEW_TASK,
    BOARD_VIEW_SAVE_NEW_TASK,
    BOARD_VIEW_CANCEL_NEW_TASK,
} from './action.constants';

let listIdCounter = BOARD_VIEW_LIST_ID_NUMBER;
let taskIdCounter = BOARD_VIEW_TASK_ID_NUMBER;

export const createList = () => (
    {
        type: BOARD_VIEW_ADD_NEW_LIST,
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
        type: BOARD_VIEW_NAME_NEW_LIST,
        payload: {
            summary: value,
            listId,
        },
    }
);

export const saveList = (listId) => (
    {
        type: BOARD_VIEW_SAVE_NEW_LIST,
        payload: {
            isNewList: false,
            listId,
        },
    }
);

export const cancelListCreation = (listId) => (
    {
        type: BOARD_VIEW_CANCEL_NEW_LIST,
        payload: {
            listId,
        },
    }
);

export const createTask = (listId) => (
    {
        type: BOARD_VIEW_CREATE_NEW_TASK,
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
        type: BOARD_VIEW_NAME_NEW_TASK,
        payload: {
            description: value,
            listId,
            taskId,
        },
    }
);

export const saveTask = (listId, taskId) => (
    {
        type: BOARD_VIEW_SAVE_NEW_TASK,
        payload: {
            isNewTask: false,
            listId,
            taskId,
        },
    }
);

export const cancelTaskCreation = (listId, taskId) => (
    {
        type: BOARD_VIEW_CANCEL_NEW_TASK,
        payload: {
            listId,
            taskId
        },
    }
);
