import { CONSTANTS } from "../actions";

let laneID = 2;

let cardID = 6;

const initialState = [
  {
    title: "Lane One",
    id: `lane-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        id: `card-${1}`,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
    ]
  },
  {
    title: "Lane Two",
    id: `lane-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        id: `card-${3}`,
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        id: `card-${4}`,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      },
      {
        id: `card-${5}`,
        text:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      }
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
        draggableId,
        type
      } = action.payload;

      const newState = [...state];

      // draggin lanes around
      if (type === "lane") {
        const lane = newState.splice(droppableIndexStart, 1);
        newState.splice(droppableIndexEnd, 0, ...lane);
        return newState;
      }

      // in the same lane
      if (droppableIdStart === droppableIdEnd) {
        const lane = state.find(lane => droppableIdStart === lane.id);
        const card = lane.cards.splice(droppableIndexStart, 1);
        lane.cards.splice(droppableIndexEnd, 0, ...card);
      }

      // other lane
      if (droppableIdStart !== droppableIdEnd) {
        // find the lane where the drag happened
        const laneStart = state.find(lane => droppableIdStart === lane.id);
        // pull out the card from this lane
        const card = laneStart.cards.splice(droppableIndexStart, 1);
        // find the lane where the drag ended
        const laneEnd = state.find(lane => droppableIdEnd === lane.id);

        // put the card in the new lane
        laneEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }

      return newState;

    case CONSTANTS.EDIT_CARD: {
      const { id, laneID, newText } = action.payload;
      return state.map(lane => {
        if (lane.id === laneID) {
          const newCards = lane.cards.map(card => {
            if (card.id === id) {
              card.text = newText;
              return card;
            }
            return card;
          });
          return { ...lane, cards: newCards };
        }
        return lane;
      });
    }

    case CONSTANTS.DELETE_CARD: {
      const { id, laneID } = action.payload;
      return state.map(lane => {
        if (lane.id === laneID) {
          const newCards = lane.cards.filter(card => card.id !== id);
          return { ...lane, cards: newCards };
        } else {
          return lane;
        }
      });
    }

    default:
      return state;
  }
}

export default laneReducer;