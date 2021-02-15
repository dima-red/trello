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

import { initialBoardViewState } from './initials';

const reducer = (state = initialBoardViewState, { type, payload } ) => {
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
        console.info('MOVE_TASK');
        console.log(payload);
        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));

        console.log(listsCopy);

        listsCopy[payload.droppableTaskListId].tasks.push(JSON.parse(JSON.stringify(listsCopy[payload.draggableTaskListId].tasks[payload.draggableTaskId])));

        listsCopy[payload.draggableTaskListId].tasks.splice(payload.draggableTaskId, 1);

        return {
            taskLists: listsCopy,
        };
    }

    case SORT_TASK: {
        console.info('SORT_TASK');
        console.log(payload);

        const listsCopy = JSON.parse(JSON.stringify(state.taskLists));
        const tasks = listsCopy[payload.draggableTaskListId].tasks;
        const draggableIndex = payload.draggableTaskId;
        const droppableIndex = payload.droppableTaskId;
        const [ sortableTask ] = tasks.splice(draggableIndex, 1);

        tasks.splice(droppableIndex, 0, sortableTask);

        console.log(tasks);

        listsCopy[payload.draggableTaskListId].tasks = tasks;

        return {
            taskLists: listsCopy,
        };
    }

    case SORT_LIST: {
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

    default:
        return state;
    }
};

export default reducer;
