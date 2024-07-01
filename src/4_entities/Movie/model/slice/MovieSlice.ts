import {createSlice} from '@reduxjs/toolkit'

import {
    dataMovie,
    genresMovie,
    IReqMovie,
    productionCompanies,
    productionCountries,
    spokenLanguages
} from "6_shared/api/types/types";

import {ISelectorResponse} from "4_entities/Movie/model/types/types";

const initialState: ISelectorResponse = {
    data: [],
    loading: false,
}

export const MovieSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        resData: (state, action) => {
            //@ts-ignore
            state.data = action.payload;
        },
        resLoading: (state, action) => {
            state.loading = action.payload;
        }
    },
})

export const {actions: movieActions} = MovieSlice;
export const {reducer: movieReducers} = MovieSlice;
