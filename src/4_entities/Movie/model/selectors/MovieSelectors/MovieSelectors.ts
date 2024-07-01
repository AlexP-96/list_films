import {ISelectorResponse} from "4_entities/Movie/model/types/types";
import {StateSchema} from "1_app/providers/storeProvider/config/stateShema";

export const responseDataMovieSelector = (state: StateSchema<unknown, ISelectorResponse>) => state.responses;
export const responseLoadingSelector = (state: StateSchema<unknown, ISelectorResponse>) => state.responses.loading;