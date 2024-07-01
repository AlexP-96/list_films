import {configureStore} from "@reduxjs/toolkit";
import {StateSchema} from "../config/stateShema";
import {BlockRadioReducer} from "../../../../4_entities/RequestsFilter";
import {dataMovie, IReqMovie} from "6_shared/api/types/types";
import {movieReducers} from "4_entities/Movie/model/slice/MovieSlice";
import {ISelectorResponse} from "4_entities/Movie/model/types/types";

export function createReduxStore(initialState: StateSchema<IReqMovie, ISelectorResponse>) {
    return configureStore<StateSchema<IReqMovie, ISelectorResponse>>({
        reducer: {
            requests: BlockRadioReducer,
            responses: movieReducers
        },
        devTools: true,
        preloadedState: initialState
    })
}
