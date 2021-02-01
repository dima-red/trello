import {
    moveTask,
    sortTask,
    sortList
} from './actions';

export const dropHelper = (dispatch, { droppableTaskListId, draggableTaskListId, droppableTaskId, draggableTaskId, handlePropagation, event } ) => {

    if (droppableTaskListId === draggableTaskListId && draggableTaskId >= 0 && droppableTaskId >= 0) {
        dispatch(sortTask(droppableTaskListId, draggableTaskListId, draggableTaskId, droppableTaskId));
    }

    if (droppableTaskListId !== draggableTaskListId && draggableTaskId >= 0 && !droppableTaskId && droppableTaskId !== 0) {
        dispatch(moveTask(droppableTaskListId, draggableTaskListId, draggableTaskId));
        handlePropagation(event);
    }

    if (droppableTaskListId !== draggableTaskListId && !draggableTaskId && draggableTaskId !== 0) {
        dispatch(sortList(droppableTaskListId, draggableTaskListId));
    }
};
