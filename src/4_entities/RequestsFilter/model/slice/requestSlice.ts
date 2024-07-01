import {createSlice} from '@reduxjs/toolkit'
import {IReqMovie} from "6_shared/api/types/types";

const initialState: IReqMovie = {
    page: 0,
    page_size: 10,
    sort_order: 'asc',
    search: null,
    genres: null,
    status: null,
    adult: false,
    ids: null,
    budget_max: null,
    budget_min: null,
    imdb_id: null,
    original_language: null,
    popularity_max: null,
    popularity_min: null,
    release_date_max: null,
    release_date_min: null,
    revenue_max: null,
    revenue_min: null,
    runtime_max: null,
    runtime_min: null,
    sort_field: null,
    spoken_languages: null,
    vote_average_max: null,
    vote_average_min: null,
    vote_count_max: null,
    vote_count_min: null,
}

export const requestSlice = createSlice({
    name: 'request',
    initialState,
    reducers: {
        requestMovies: (state, action) => {
            const {key, value} =  action.payload;
            //@ts-ignore
            state[key] =  value;
        },
        requestMovieMinMax: (state, action) => {
            const {keyOne, valueOne, keyTwo, valueTwo} =  action.payload;
            //@ts-ignore
            state[keyOne] =  valueOne;
            //@ts-ignore
            state[keyTwo] =  valueTwo;
        },
        searchMovie: (state, action) => {
            state.search = action.payload;
        },
        requestMoviesArr: (state, action) => {
            //@ts-ignore
            state[action.payload.key] = action.payload.value
        },
        requestPage: (state, action) =>  {
            state.page = action.payload;
        }
    },
})

export const {actions: requestDataActions} = requestSlice;
export const {reducer: BlockRadioReducer} = requestSlice;
