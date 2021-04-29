import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppStage, clientSlice } from "modules/client/slice";

type ChangeStageArg = {
    ms: number;
    stage: AppStage;
};

export const changeStage = createAsyncThunk<void, ChangeStageArg>(
    "client/change-stage",
    (arg, thunkAPI) => {
        setTimeout(() => {
            setTimeout(() => {
                thunkAPI.dispatch(clientSlice.actions.changeStage(arg.stage));
            }, arg.ms);
        });
    }
);
