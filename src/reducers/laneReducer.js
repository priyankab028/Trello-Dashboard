import { CONSTANTS } from "../actions";

let laneID = 2;

let cardID = 4

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
        case CONSTANTS.ADD_LANE:
            const newLane = {
                title: action.payload,
                cards: [],
                id: laneID
            }
            laneID += 1
            return [...state, newLane];

        case CONSTANTS.ADD_CARD:
            const newCard = {
                text: action.payload.text,

                id: cardID
            };
            cardID += 1
            const newState = state.map(lane => {
                if (lane.id === action.payload.laneID) {
                    return {
                        ...lane,
                        cards: [...lane.cards, newCard]
                    };
                } else {
                    return lane;
                }
            });
            return newState;

        default:
            return state;
    }
}

export default laneReducer;