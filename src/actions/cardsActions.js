import { CONSTANTS } from "./";

export const addCard = (laneID, text) => {
    return {
        type: CONSTANTS.ADD_CARD,
        payload: { text, laneID }
    };
};