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
    SORT_TASK
} from './action.constants';

const initialState = {
    taskLists: [
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
            id: 0,
        },
        {
            summary: 'In Progress',
            tasks: [
                {
                    description: 'Something is in progress!',
                    taskId: 2,
                },
                {
                    description: 'Something important is in progress!',
                    taskId: 3,
                }
            ],
            dateTime: '11/19/2020, 4:06:49 PM',
            id: 1,
        }
    ],
};

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {
    case ADD_NEW_LIST:
        return {
            taskLists: [
                ...state.taskLists,
                payload,
            ],
        };
    case NAME_NEW_LIST: {

        return {
            taskLists: state.taskLists.map(taskList => {
                if (taskList.id === payload.id) {
                    taskList.summary = payload.summary;
                    return taskList;
                }
                return taskList;
            })
        };
    }
    case SAVE_NEW_LIST: {

        return {
            taskLists: state.taskLists.map(taskList => {
                if (taskList.id === payload.id) {
                    taskList.isEditList = payload.isEditList;
                    return taskList;
                }
                return taskList;
            })
        };
    }
    case CANCEL_NEW_LIST: {

        return {
            taskLists: state.taskLists.filter(taskList => taskList.id !== payload.id)
        };
    }

    case CREATE_NEW_TASK: {

        return {
            taskLists: state.taskLists.map(taskList => {
                if (taskList.id === payload.id) {
                    taskList.tasks.push(payload);
                    return taskList;
                }
                return taskList;
            })
        };
    }

    case NAME_NEW_TASK: {

        return {
            taskLists: state.taskLists.map(taskList => {
                if (taskList.id === payload.id) {
                    taskList.tasks.map(task => {
                        if (task.taskId === payload.taskId) {
                            task.description = payload.description;
                            return task;
                        }
                        return task;
                    });
                    return taskList;
                }
                return taskList;
            })
        };
    }

    case SAVE_NEW_TASK: {

        return {
            taskLists: state.taskLists.map(taskList => {
                if (taskList.id === payload.id) {
                    taskList.tasks.map(task => {
                        if (task.taskId === payload.taskId) {
                            task.isEditTask = payload.isEditTask;
                            return task;
                        }
                        return task;
                    });
                    return taskList;
                }
                return taskList;
            })
        };
    }

    case CANCEL_NEW_TASK: {

        return {
            taskLists: state.taskLists.map(taskList => {
                if (taskList.id === payload.id) {
                    taskList.tasks = taskList.tasks.filter(task => task.taskId !== payload.taskId);
                    return taskList;
                }
                return taskList;
            })
        };
    }

    case MOVE_TASK: {
        if (payload.droppableTaskListId !== payload.draggableTaskListId) {
            const listsCopy = Object.assign([], state.taskLists);
            console.log(listsCopy);
            // listsCopy[payload.droppableTaskListId].tasks[payload.taskId] = Object.assign({}, listsCopy[payload.draggableTaskListId].tasks[payload.taskId]);
            //
            // delete listsCopy[payload.draggableTaskListId].tasks[payload.taskId];
            //
            // return {
            //     taskLists: listsCopy,
            // };

            return {
                taskLists: state.taskLists.map(taskList => {
                    if (taskList.id === payload.droppableTaskListId) {
                        taskList.tasks.push(Object.assign({}, ...listsCopy[payload.draggableTaskListId].tasks.filter(task => task.taskId === payload.taskId)));
                        return taskList;
                    }
                    if (taskList.id === payload.draggableTaskListId) {
                        taskList.tasks = taskList.tasks.filter(task => task.taskId !== payload.taskId);
                        return taskList;
                    }
                    return taskList;
                })
            };
        }

        return state;
    }

    case SORT_TASK: {
        if (payload.droppableTaskListId === payload.draggableTaskListId) {
            // const listsCopy = Object.assign({}, state.taskLists);
            // const tasks = Object.values(listsCopy[payload.draggableTaskListId].tasks);
            // const draggableIndex = tasks.findIndex((curr) => curr.taskId === payload.taskId);
            // const [ sortableTask ] = tasks.splice(draggableIndex, 1);
            // const droppableIndex = tasks.findIndex((curr) => curr.taskId === payload.droppableTaskId);
            //
            // if (draggableIndex <= droppableIndex) {
            //     console.log("Think about it");
            // }
            //
            // tasks.splice(droppableIndex, 0, sortableTask);
            // listsCopy[payload.draggableTaskListId].tasks = { ...tasks };
            //
            // return {
            //     taskLists: listsCopy,
            // };
            console.log('BooooM');
        }

        return state;
    }

    default:
        return state;
    }
};

export default reducer;
