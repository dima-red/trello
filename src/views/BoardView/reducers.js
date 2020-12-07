import { ADD_NEW_LIST } from '../../constants/action.constants';

const initialState = [
    {
        summary: 'ToDo',
        description: 'To do something important!',
        dateTime: '01.01.2021',
    },
    {
        summary: 'In Progress',
        description: 'Something important is in progress!',
        dateTime: '01.01.2021',
    }
];

const lists = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_LIST:
            return [
                ...state,
                {
                    placeholder: action.placeholder,
                    id: action.id,
                },
            ];

        default:
            return state;
    }
};

export default {
    lists,
};
