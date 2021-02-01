import {
    BOARD_VIEW_TASK_LIST_ID,
    BOARD_VIEW_TASK_ID,

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

let taskListIdCounter = BOARD_VIEW_TASK_LIST_ID;
let taskIdCounter = BOARD_VIEW_TASK_ID;

export const createTaskList = () => (
    {
        type: ADD_NEW_LIST,
        payload: {
            summary: '',
            tasks: [],
            placeholder: 'Please, name your list',
            dateTime: new Date().toLocaleString(),
            isEditList: true,
            id: ++taskListIdCounter,
        },
    }
);

export const nameTaskList = (value, taskListId) => (
    {
        type: NAME_NEW_LIST,
        payload: {
            summary: value,
            id: taskListId,
        },
    }
);

export const saveTaskList = (taskListId) => (
    {
        type: SAVE_NEW_LIST,
        payload: {
            isEditList: false,
            id: taskListId,
        },
    }
);

export const cancelTaskListCreation = (taskListId) => {
    return {
        type: CANCEL_NEW_LIST,
        payload: {
            id: taskListId,
        },
    }
};

export const createTask = (taskListId) => (
    {
        type: CREATE_NEW_TASK,
        payload: {
            description: '',
            placeholder: 'Please, add description for your task',
            dateTime: new Date().toLocaleString(),
            isEditTask: true,
            listId: taskListId,
            id: ++taskIdCounter,
        },
    }
);

export const nameTask = (value, taskListId, taskId) => (
    {
        type: NAME_NEW_TASK,
        payload: {
            description: value,
            taskId,
            listId: taskListId,
        },
    }
);

export const saveTask = (taskListId, taskId) => (
    {
        type: SAVE_NEW_TASK,
        payload: {
            isEditTask: false,
            taskId,
            listId: taskListId,
        },
    }
);

export const cancelTaskCreation = (taskListId, taskId) => (
    {
        type: CANCEL_NEW_TASK,
        payload: {
            listId: taskListId,
            taskId
        },
    }
);

export const moveTask = (droppableTaskListId, draggableTaskListId, taskId) => (
    {
        type: MOVE_TASK,
        payload: {
            droppableTaskListId,
            draggableTaskListId,
            taskId
        },
    }
);

export const sortTask = (droppableTaskListId, draggableTaskListId, draggableTaskId, droppableTaskId) => (
    {
        type: SORT_TASK,
        payload: {
            droppableTaskListId,
            draggableTaskListId,
            taskId: draggableTaskId,
            droppableTaskId
        },
    }
);

export const sortList = (droppableTaskListId, draggableTaskListId, taskId) => (
    {
        type: SORT_LIST,
        payload: {
            droppableTaskListId,
            draggableTaskListId,
            taskId
        },
    }
);
