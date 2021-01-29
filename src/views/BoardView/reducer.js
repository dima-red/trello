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
    taskLists: [
        {
            summary: 'ToDo',
            tasks: [
                {
                    description: 'To do something important!',
                },
                {
                    description: 'To do something another important!',
                }
            ],
            dateTime: '11/18/2020, 3:06:49 PM',
        },
        {
            summary: 'In Progress',
            tasks: [
                {
                    description: '1',
                },
                {
                    description: '2',
                },
                {
                    description: '3',
                },
                {
                    description: '4',
                }
            ],
            dateTime: '11/19/2020, 4:06:49 PM',
        }
    ],
};

const reducer = (state = initialState, { type, payload } ) => {
    switch (type) {
    case ADD_NEW_LIST:
        return {
            taskLists: [
                ...state.taskLists,
                payload,
            ],
        };
    case NAME_NEW_LIST: {
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        listsCopy[payload.id].summary = payload.summary;

        return {
            taskLists: listsCopy,
        };
    }
    case SAVE_NEW_LIST: {
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        listsCopy[payload.id].isEditList = payload.isEditList;

        return {
            taskLists: listsCopy,
        };
    }
    case CANCEL_NEW_LIST: {
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        listsCopy.splice(payload.id, 1);

        return {
            taskLists: listsCopy,
        };
    }

    case CREATE_NEW_TASK: {
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        listsCopy[payload.listId].tasks = [...listsCopy[payload.listId].tasks, payload];

        return {
            taskLists: listsCopy
        };
    }

    case NAME_NEW_TASK: {
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        listsCopy[payload.listId].tasks[payload.taskId].description = payload.description;

        return {
            taskLists: listsCopy,
        };
    }

    case SAVE_NEW_TASK: {
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        listsCopy[payload.listId].tasks[payload.taskId].isEditTask = payload.isEditTask;

        return {
            taskLists: listsCopy,
        };
    }

    case CANCEL_NEW_TASK: {
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        const tasks = listsCopy[payload.listId].tasks;

        tasks.splice(payload.taskId, 1);

        return {
            taskLists: listsCopy,
        };
    }

    case MOVE_TASK: {
        console.log(payload);
        if (payload.droppableTaskListId !== payload.draggableTaskListId && payload.taskId >= 0) {
            console.log('MOVE_TASK');
            console.log(payload);
            const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

            console.log(listsCopy);

            listsCopy[payload.droppableTaskListId].tasks.push(JSON.parse(JSON.stringify(listsCopy[payload.draggableTaskListId].tasks[payload.taskId])));

            listsCopy[payload.draggableTaskListId].tasks.splice(payload.taskId, 1);

            return {
                taskLists: listsCopy,
            };
        }

        return state;
    }

    case SORT_TASK: {
        console.log(payload);
        if (payload.droppableTaskListId === payload.draggableTaskListId && payload.taskId >= 0) {
            console.log('SORT_TASK');
            console.log(payload);

            const listsCopy = JSON.parse(JSON.stringify(state.taskLists));
            const tasks = listsCopy[payload.draggableTaskListId].tasks;
            const draggableIndex = payload.taskId;
            const droppableIndex = payload.droppableTaskId;
            const [ sortableTask ] = tasks.splice(draggableIndex, 1);

            tasks.splice(droppableIndex, 0, sortableTask);

            console.log(tasks);
            // listsCopy[payload.draggableTaskListId].tasks = { ...tasks };
            listsCopy[payload.draggableTaskListId].tasks = tasks;

            return {
                taskLists: listsCopy,
            };
        }

        return state;
    }

    case SORT_LIST: {
        console.log(payload);
        if (payload.droppableTaskListId !== payload.draggableTaskListId && !payload.taskId && payload.taskId !== 0) {
            console.info('SORT_LIST');
            console.log(payload);

            const listsCopy = JSON.parse(JSON.stringify(state.taskLists));
            const draggableIndex = payload.draggableTaskListId;
            const droppableIndex = payload.droppableTaskListId;
            const [ sortableList ] = listsCopy.splice(draggableIndex, 1);

            listsCopy.splice(droppableIndex, 0, sortableList);

            return {
                taskLists: listsCopy,
            };
        }

        return state;
    }

    default:
        return state;
    }
};

export default reducer;
