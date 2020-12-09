import { ADD_NEW_LIST } from '../../constants/action.constants';
import { NAME_NEW_LIST } from '../../constants/action.constants';
import { SAVE_NEW_LIST } from '../../constants/action.constants';
import { CANCEL_NEW_LIST } from '../../constants/action.constants';

const initialState = [
    {
        summary: 'ToDo',
        tasks: [{description: 'To do something important!'}, {description: 'To do something another important!'}],
        dateTime: '11/18/2020, 3:06:49 PM',
        id: 0,
    },
    {
        summary: 'In Progress',
        tasks: [{description: 'Something important is in progress!'}, {description: 'Something important is in progress!'}],
        dateTime: '11/19/2020, 4:06:49 PM',
        id: 1,
    }
];

const lists = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_NEW_LIST:
            return [
                ...state,
                {
                    ...payload
                },
            ];
        case NAME_NEW_LIST:
             return state.map(list => {
                if (list.id === payload.id) {
                    list.summary = payload.summary;
                    return list;
                }
                return list;
             });
        case SAVE_NEW_LIST:
             return state.map(list => {
                if (list.id === payload.id) {
                    list.isNewList = payload.isNewList;
                    return list;
                }
                return list;
             });
        case CANCEL_NEW_LIST:
            return state.filter(list => list.id !== payload.id);

        default:
            return state;
    }
};

export default {
    lists,
};
