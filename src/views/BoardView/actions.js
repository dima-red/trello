import { ADD_NEW_LIST } from '../../constants/action.constants';
import { NAME_NEW_LIST } from '../../constants/action.constants';
import { LIST_ID_NUMBER } from '../../constants/action.constants';
import { SAVE_NEW_LIST } from '../../constants/action.constants';
import { CANCEL_NEW_LIST } from '../../constants/action.constants';

let listCounter = LIST_ID_NUMBER;

export const createList = () => (
    {
        type: ADD_NEW_LIST,
        payload: {
            summary: '',
            tasks: [],
            placeholder: 'Please, name your list',
            id: ++listCounter,
            dateTime: new Date().toLocaleString(),
            isNewList: true,
        },
    }
);

export const nameList = (value, id) => (
    {
        type: NAME_NEW_LIST,
        payload: {
            summary: value,
            id,
        },
    }
);

export const saveList = (id) => (
    {
        type: SAVE_NEW_LIST,
        payload: {
            isNewList: false,
            id,
        },
    }
);

export const cancelListCreation = (id) => (
    {
        type: CANCEL_NEW_LIST,
        payload: {
            id,
        },
    }
);
