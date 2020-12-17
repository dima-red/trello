import {
    ADD_NEW_LIST,
    NAME_NEW_LIST,
    SAVE_NEW_LIST,
    CANCEL_NEW_LIST,
    CREATE_NEW_TASK,
    NAME_NEW_TASK,
    SAVE_NEW_TASK,
    CANCEL_NEW_TASK,
} from '../actions/action.constants';

const initialState = [
    {
        summary: 'ToDo',
        tasks: [
            {
                description: 'To do something important!',
                taskId: 0,
            },
            {
                description: 'To do something another important!',
                taskId: 1,
            }
        ],
        dateTime: '11/18/2020, 3:06:49 PM',
        listId: 0,
    },
    {
        summary: 'In Progress',
        tasks: [
            {
                description: 'Something important is in progress!',
                taskId: 2,
            },
            {
                description: 'Something important is in progress!',
                taskId: 3,
            }
        ],
        dateTime: '11/19/2020, 4:06:49 PM',
        listId: 1,
    }
];

const lists = (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_NEW_LIST:
        return [
            ...state,
            {
                ...payload,
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
            }
            return list;
        });

    case CANCEL_NEW_LIST:
        return state.filter(list => list.listId !== payload.listId);

    case CREATE_NEW_TASK:
        return state.map(list => {
            if (list.listId === payload.listId) {
                list.tasks.push(payload);
            }
            return list;
        });
    case NAME_NEW_TASK:
        return state.map(list => {
            if (list.listId === payload.listId) {
                list.tasks.map(task => {
                    if (task.taskId === payload.taskId) {
                        task.description = payload.description;
                    }
                    return task;
                });
            }
            return list;
        });

    case SAVE_NEW_TASK:
        return state.map(list => {
            if (list.listId === payload.listId) {
                list.tasks.map(task => {
                    if (task.taskId === payload.taskId) {
                        task.isNewTask = payload.isNewTask;
                    }
                    return task;
                });
            }
            return list;
        });

    case CANCEL_NEW_TASK:
        return state.map(list => {
            if (list.listId === payload.listId) {
                list.tasks = list.tasks.filter(task => task.taskId !== payload.taskId);
            }
            return list;
        });

    default:
        return state;
    }
};

export default lists;
