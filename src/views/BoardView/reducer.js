import {
    ADD_NEW_LIST,
    NAME_NEW_LIST,
    SAVE_NEW_LIST,
    CANCEL_NEW_LIST,
    CREATE_NEW_TASK,
    NAME_NEW_TASK,
    SAVE_NEW_TASK,
    CANCEL_NEW_TASK,
    MOVE_TASK,
    SORT_TASK,
    SORT_LIST
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
            id: 0,
        },
        1: {
            summary: 'In Progress',
            tasks: {
                2: {
                    description: 'Something is in progress!',
                    taskId: 2,
                },
                3: {
                    description: 'Something important is in progress!',
                    taskId: 3,
                }
            },
            dateTime: '11/19/2020, 4:06:49 PM',
            id: 1,
        }
    },
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_NEW_LIST:
        return {
            taskLists: {
                ...state.taskLists,
                [payload.id]: payload,
            },
        };
    case NAME_NEW_LIST: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.id].summary = payload.summary;

        return {
            taskLists: listsCopy,
        };
    }
    case SAVE_NEW_LIST: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.id].isEditList = payload.isEditList;

        return {
            taskLists: listsCopy,
        };
    }
    case CANCEL_NEW_LIST: {
        const listsCopy = Object.assign({}, state.taskLists);

        delete listsCopy[payload.id];

        return {
            taskLists: listsCopy,
        };
    }

    case CREATE_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.id].tasks[payload.taskId] = payload;

        return {
            taskLists: listsCopy
        };
    }

    case NAME_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.id].tasks[payload.taskId].description = payload.description;

        return {
            taskLists: listsCopy,
        };
    }

    case SAVE_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        listsCopy[payload.id].tasks[payload.taskId].isEditTask = payload.isEditTask;

        return {
            taskLists: listsCopy,
        };
    }

    case CANCEL_NEW_TASK: {
        const listsCopy = Object.assign({}, state.taskLists);

        delete listsCopy[payload.id].tasks[payload.taskId];

        return {
            taskLists: listsCopy,
        };
    }

    case MOVE_TASK: {
        if (payload.droppableTaskListId !== payload.draggableTaskListId) {
            const listsCopy = Object.assign({}, state.taskLists);

            listsCopy[payload.droppableTaskListId].tasks[payload.taskId] = Object.assign({}, listsCopy[payload.draggableTaskListId].tasks[payload.taskId]);

            delete listsCopy[payload.draggableTaskListId].tasks[payload.taskId];

            return {
                taskLists: listsCopy,
            };
        }

        return state;
    }

    case SORT_TASK: {
        console.log('NoooooooB');
        if (payload.droppableTaskListId === payload.draggableTaskListId) {
            const listsCopy = Object.assign({}, state.taskLists);
            const tasks = Object.values(listsCopy[payload.draggableTaskListId].tasks);
            const draggableIndex = tasks.findIndex((curr) => curr.taskId === payload.taskId);
            const droppableIndex = tasks.findIndex((curr) => curr.taskId === payload.droppableTaskId);
            const [ sortableTask ] = tasks.splice(draggableIndex, 1);

            tasks.splice(droppableIndex, 0, sortableTask);
            listsCopy[payload.draggableTaskListId].tasks = { ...tasks };

            return {
                taskLists: listsCopy,
            };
        }

        return state;
    }

    case SORT_LIST: {
        console.log('BoooooooM');
        // const listsCopy = Object.assign({}, state.taskLists);
        // const tasks = Object.values(listsCopy[payload.draggableTaskListId].tasks);
        // const draggableIndex = tasks.findIndex((curr) => curr.taskId === payload.taskId);
        // const droppableIndex = tasks.findIndex((curr) => curr.taskId === payload.droppableTaskId);
        // const [ sortableTask ] = tasks.splice(draggableIndex, 1);
        //
        // tasks.splice(droppableIndex, 0, sortableTask);
        // listsCopy[payload.draggableTaskListId].tasks = { ...tasks };
        //
        // return {
        //     taskLists: listsCopy,
        // };
    }

    default:
        return state;
    }
};

export default reducer;
