import { CONSTANTS } from "../actions";

let laneID = 2;

let cardID = 6;

const initialState = [
    {
        title: "Last Episode",
        id: `lane-${0}`,
        cards: [
            {
                id: `card-${0}`,
                text: "create Static Lsit and Static Card"
            },
            {
                id: `card-${1}`,
                text: "create another component"
            }
        ]
    },
    {
        title: "This Episode",
        id: `lane-${1}`,
        cards: [
            {
                id: `card-${2}`,
                text: "create card 1",
            },
            {
                id: `card-${3}`,
                text: "create card 2"
            },
            {
                id: `card-${4}`,
                text: "create card 3"
            },
            {
                id: `card-${5}`,
                text: "create card 4"
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
                id: `lane-${laneID}`
            }
            laneID += 1
            return [...state, newLane];

        case CONSTANTS.ADD_CARD: {
            const newCard = {
                text: action.payload.text,

                id: `card-${cardID}`
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
        }

        case CONSTANTS.DRAG_OCCURED:
            const {
                droppableIdStart,
                droppableIdEnd,
                droppableIndexStart,
                droppableIndexEnd,
                draggableId
            } = action.payload;

            const newState = [...state];
            if (droppableIdStart === droppableIdEnd) {
                const lane = state.find(lane => droppableIdStart === lane.id);
                const card = lane.cards.splice(droppableIndexStart, 1);
                lane.cards.splice(droppableIndexEnd, 0, ...card)
            }
            return newState;

        default:
            return state;
    }
}

export default laneReducer;