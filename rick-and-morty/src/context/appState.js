import { useReducer } from "react";
import { AppContext } from "./appContext";
import { AppReducer } from "./appReducer";
import {
    GET_CHARACTERS,
    GET_CHARACTER,
} from "./types";

export const AppState = (props) => {
    const initialState = {
        characters: [],
        character: null,
        page: 1,
    };

    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Get Characters
    const getCharacters = async (page) => {
        try {
            const res = await fetch(`https://rickandmortyapi.com/api/character/?page=${page}`);

            const data = await res.json();

            dispatch({
                type: GET_CHARACTERS,
                payload: data,
            });

        } catch (err) {
            console.log(err.message);
        }
    };

    // Search Characters
    const searchCharacters = async ({ name, status, gender }) => {
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?name=${name}&status=${status}&gender=${gender}`
            );

            const data = await res.json();

            dispatch({
                type: GET_CHARACTERS,
                payload: data,
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    // Get Single Character
    const getCharacter = async (id) => {
        try {
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/${id}`
            );

            const data = await res.json();

            dispatch({
                type: GET_CHARACTER,
                payload: data,
            });
        } catch (err) {
            console.log(err.message);
        }
    };

    return (
        <AppContext.Provider
            value={{
                characters: state.characters,
                character: state.character,
                page: state.page,
                getCharacters,
                getCharacter,
                searchCharacters
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
};