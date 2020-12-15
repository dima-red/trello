import { LIST_ID_NUMBER } from '../../constants/action.constants';
import { TASK_ID_NUMBER } from '../../constants/action.constants';

import { ADD_NEW_LIST } from '../../constants/action.constants';
import { NAME_NEW_LIST } from '../../constants/action.constants';
import { SAVE_NEW_LIST } from '../../constants/action.constants';
import { CANCEL_NEW_LIST } from '../../constants/action.constants';
import { CREATE_NEW_TASK } from '../../constants/action.constants';

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
