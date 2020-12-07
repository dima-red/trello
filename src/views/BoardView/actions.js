import { ADD_NEW_LIST } from '../../constants/action.constants';

let listCounter = 0;

const createList = () => ({
    type: ADD_NEW_LIST,
    payload: {
        placeholder: 'New List',
        id: ++listCounter
    },
});

export default createList;
