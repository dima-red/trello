import { useCallback } from 'react';
import {
    moveTask,
    sortTask,
    sortList
} from './actions';

export const dropHelper = (dispatch, data ) => {
    console.log(data);
    const {
        droppableTaskListId,
        draggableTaskListId,
        droppableTaskId,
        draggableTaskId,
        handlePropagation,
        event
    } = data;

    // if (droppableTaskListId === draggableTaskListId && draggableTaskId >= 0 && droppableTaskId >= 0) {
    //     dispatch(sortTask(droppableTaskListId, draggableTaskListId, draggableTaskId, droppableTaskId));
    // }

    // if (droppableTaskListId !== draggableTaskListId && draggableTaskId >= 0 && !droppableTaskId && droppableTaskId !== 0) {
    //     dispatch(moveTask(droppableTaskListId, draggableTaskListId, draggableTaskId));
    //     handlePropagation(event);
    // }

    // if (droppableTaskListId !== draggableTaskListId && !draggableTaskId && draggableTaskId !== 0) {
    //     dispatch(sortList(droppableTaskListId, draggableTaskListId));
    // }
};

export const withCallback = (cb, params) => {
    console.log('BooooM');
    const memoizedCallback = useCallback(
        cb,
        [params],
    );

    return memoizedCallback;
};
