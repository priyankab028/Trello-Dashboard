const initialState = [
    {
        title: "Last Episode",
        id: 0,
        cards: [
            {
                id: 0,
                text: "create Static Lsit and Static Card"
            },
            {
                id: 1,
                text: "create another component"
            }
        ]
    },
    {
        title: "This Episode",
        id: 1,
        cards: [
            {
                id: 0,
                text: "create card 1"
            },
            {
                id: 1,
                text: "create card 2"
            },
            {
                id: 2,
                text: "create card 3"
            },
        ]
    }
];

const laneReducer = (state = initialState, action) => {
    switch (action.type) {

        default:
            return state;
    }
}

export default laneReducer;