import React from 'react';
import {Provider} from 'react-redux';
import {createReduxStore} from "../config/store";
import {StateSchema} from "../config/stateShema";
import {dataMovie, IReqMovie} from "6_shared/api/types/types";
import {ISelectorResponse} from "4_entities/Movie/model/types/types";

interface StoreProviderProps {
    children: React.ReactNode;
    initialState?: StateSchema<IReqMovie, ISelectorResponse>;
}

export const StoreProvider = ({children, initialState}: StoreProviderProps) => {

    const store = createReduxStore(initialState)

    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
