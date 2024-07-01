import {StateSchema} from "1_app/providers/storeProvider/config/stateShema";
import {IReqMovie} from "6_shared/api/types/types";

export const requestDataMovieSelector = (state: StateSchema<IReqMovie, unknown>) => state.requests;
export const requestCountPageVisibleSelector   =   (state: StateSchema<IReqMovie, unknown>)   => state.requests.page_size;