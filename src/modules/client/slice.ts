import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import * as Label from "modules/label";
import * as Model from "modules/model";
import { Selector } from "store";

interface ClientState {
    model?: Model.Entity;
    labels?: Label.Entity[];
    snapshot?: Snapshot;
    stage: AppStage;
    error?: Error;
}

export type Snapshot = Blob;

export type AppStage =
    | "load-model"
    | "load-labels"
    | "camera"
    | "prediction"
    | "error";

const initialState: ClientState = {
    stage: "load-model",
};

export const clientSlice = createSlice({
    name: "client",
    initialState,
    reducers: {
        setModel: (state, action: PayloadAction<Model.Entity>) => {
            state.model = action.payload;
        },
        setLabels: (state, action: PayloadAction<Label.Entity[]>) => {
            state.labels = action.payload;
        },
        changeStage: (state, action: PayloadAction<AppStage>) => {
            state.stage = action.payload;
        },
        setSnapshot: (state, action: PayloadAction<Snapshot>) => {
            state.snapshot = action.payload;
        },
        setError: (state, action: PayloadAction<Error>) => {
            state.error = action.payload;
        },
    },
});

export const clientSelector: Selector<ClientState> = (state) => state.client;

export const useClient = () => {
    return useSelector(clientSelector);
};
