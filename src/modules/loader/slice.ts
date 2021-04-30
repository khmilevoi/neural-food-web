import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { Selector } from "store";

interface LoaderState {
    status: LoaderStatus;
    progress: number;
}

type LoaderStatus = "progress" | "default";

const initialState: LoaderState = {
    status: "default",
    progress: 0,
};

export const loaderSlice = createSlice({
    name: "loader",
    initialState,
    reducers: {
        changeStatus: (state, action: PayloadAction<LoaderStatus>) => {
            state.status = action.payload;
        },
        setProgress: (state, action: PayloadAction<number>) => {
            state.progress = action.payload;
        },
    },
});

export const loaderSelector: Selector<LoaderState> = (state) => state.loader;

export const useLoader = () => {
    return useSelector(loaderSelector);
};
