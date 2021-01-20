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
        '#1': {
            summary: 'ToDo',
            tasks: {
                '#1': {
                    description: 'To do something important!',
                    taskId: 1,
                },
                '#2': {
                    description: 'To do something another important!',
                    taskId: 2,
                }
            },
            dateTime: '11/18/2020, 3:06:49 PM',
            id: '#1',
        },
        '#2': {
            summary: 'In Progress',
            tasks: {
                '#3': {
                    description: '1',
                    taskId: 3,
                },
                '#4': {
                    description: '2',
                    taskId: 4,
                },
                '#5': {
                    description: '3',
                    taskId: 5,
                },
                '#6': {
                    description: '4',
                    taskId: 6,
                }
            },
            dateTime: '11/19/2020, 4:06:49 PM',
            id: '#2',
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
        console.log(!!payload.taskId);
        if (payload.droppableTaskListId !== payload.draggableTaskListId && payload.taskId) {
            console.log('MOVE_TASK');
            console.log(payload);
            const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

            console.log(JSON.stringify(state.taskLists));
            console.log(listsCopy);

            listsCopy[payload.droppableTaskListId].tasks[`#${payload.taskId}`] = JSON.parse(JSON.stringify(listsCopy[payload.draggableTaskListId].tasks[`#${payload.taskId}`]));

            delete listsCopy[payload.draggableTaskListId].tasks[`#${payload.taskId}`];

            return {
                taskLists: listsCopy,
            };
        }

        return state;
    }

    case SORT_TASK: {
        console.log(payload);
        if (payload.droppableTaskListId === payload.draggableTaskListId && !!payload.taskId) {
            console.log('SORT_TASK');
            console.log(payload);

            const listsCopy = Object.assign({}, state.taskLists);
            const tasks = [...Object.values(listsCopy[payload.draggableTaskListId].tasks)];
            const draggableIndex = tasks.findIndex((curr) => curr.taskId === payload.taskId);
            const droppableIndex = tasks.findIndex((curr) => curr.taskId === payload.droppableTaskId);
            const [ sortableTask ] = tasks.splice(draggableIndex, 1);

            tasks.splice(droppableIndex, 0, sortableTask);

            console.log(tasks);
            const restoreIdHelper = arr => {
                const tempObj = {};
                arr.forEach(item => tempObj[`#${item.taskId}`] = item);

                return tempObj;
            };
            console.log(restoreIdHelper(tasks));
            // listsCopy[payload.draggableTaskListId].tasks = { ...tasks };
            listsCopy[payload.draggableTaskListId].tasks = restoreIdHelper(tasks);

            return {
                taskLists: listsCopy,
            };
        }

        return state;
    }

    case SORT_LIST: {
        console.log(!!payload.taskId);
        if (payload.droppableTaskListId !== payload.draggableTaskListId && !payload.taskId) {
            console.info('SORT_LIST');
            console.log(payload);

            const listsCopy = Object.assign({}, state.taskLists);
            const lists = [...Object.values(listsCopy)];
            const draggableIndex = lists.findIndex((curr) => curr.id === payload.draggableTaskListId);
            const droppableIndex = lists.findIndex((curr) => curr.id === payload.droppableTaskListId);

            console.log(lists);

            const [ sortableList ] = lists.splice(draggableIndex, 1);

            lists.splice(droppableIndex, 0, sortableList);

            const restoreIdHelper = arr => {
                const tempObj = {};
                arr.forEach(item => tempObj[item.id] = item);

                return tempObj;
            };
            console.log(restoreIdHelper(lists));

            return {
                taskLists: restoreIdHelper(lists),
            };
        }

        return state;
    }

    default:
        return state;
    }
};

export default reducer;
