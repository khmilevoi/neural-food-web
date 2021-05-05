import {configureStore, getDefaultMiddleware} from "@reduxjs/toolkit";
import { Selector as BaseSelector } from "react-redux";
import { clientSlice } from "modules/client/slice";
import { loaderSlice } from "modules/loader/slice";

export const store = configureStore({
    devTools: true,
    reducer: {
        client: clientSlice.reducer,
        loader: loaderSlice.reducer,
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false
    })
});

const State = store.getState();

export type Selector<Slice> = BaseSelector<typeof State, Slice>;
