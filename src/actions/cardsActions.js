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