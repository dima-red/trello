export const initialBoardViewState = {
    taskLists: [
        {
            summary: 'ToDo',
            tasks: [
                {
                    description: 'To do something important!',
                    id: 0,
                },
                {
                    description: 'To do something another important!',
                    id: 1,
                }
            ],
            dateTime: '11/18/2020, 3:06:49 PM',
            id: 0,
        },
        {
            summary: 'In Progress',
            tasks: [
                {
                    description: '1',
                    id: 2,
                },
                {
                    description: '2',
                    id: 3,
                },
                {
                    description: '3',
                    id: 4,
                },
                {
                    description: '4',
                    id: 5,
                }
            ],
            dateTime: '11/19/2020, 4:06:49 PM',
            id: 1,
        }
    ],
};
