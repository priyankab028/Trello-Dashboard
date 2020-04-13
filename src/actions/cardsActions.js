import { CONSTANTS } from "./";

export const addCard = (laneID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, laneID }
    };
};
export const editCard = (id, laneID, newText) => {
    return {
        type: CONSTANTS.EDIT_CARD,
        payload: { id, laneID, newText }
    };
};

export const deleteCard = (id, laneID) => {
    return {
        type: CONSTANTS.DELETE_CARD,
        payload: { id, laneID }
    };
};
