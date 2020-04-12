import { CONSTANTS } from "./";

export const addLane = title => {
    return {
        type: CONSTANTS.ADD_LANE,
        payload: title
    };
};