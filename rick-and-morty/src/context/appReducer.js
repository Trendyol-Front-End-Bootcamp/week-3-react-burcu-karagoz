import {
    GET_CHARACTERS,
    GET_CHARACTER,
} from "./types";

export const AppReducer = (state, action) => {
    const { type, payload } = action;

    switch (type) {
        case GET_CHARACTERS:
            return {
                ...state,
                characters: payload.results,
                // page: payload?.info?.pages,
            };
        case GET_CHARACTER:
            return {
                ...state,
                character: payload,
            };
        default:
            return state;
    }
};