import { ADD_NEW_LIST, NAME_NEW_LIST, SAVE_NEW_LIST, CANCEL_NEW_LIST, CREATE_NEW_TASK } from '../../constants/action.constants';

const initialState = [
    {
        summary: 'ToDo',
        tasks: [{description: 'To do something important!'}, {description: 'To do something another important!'}],
        dateTime: '11/18/2020, 3:06:49 PM',
        listId: 0,
    },
    {
        summary: 'In Progress',
        tasks: [{description: 'Something important is in progress!'}, {description: 'Something important is in progress!'}],
        dateTime: '11/19/2020, 4:06:49 PM',
        listId: 1,
    }
];

const lists = (state = initialState, {type, payload, listId}) => {
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
                if (list.listId === payload.listId) {
                    list.summary = payload.summary;
                    return list;
                }
                return list;
             });
        case SAVE_NEW_LIST:
             return state.map(list => {
                if (list.listId === payload.listId) {
                    list.isNewList = payload.isNewList;
                    // return list;
                }
                return list;
             });
        case CANCEL_NEW_LIST:
            return state.filter(list => list.listId !== payload.listId);
        case CREATE_NEW_TASK:
            return state.map(list => {
                if (list.listId === listId) {
                    list.tasks.push(payload);
                };
                return list;
            });

        default:
            return state;
    }
};

export default {
    lists,
};
