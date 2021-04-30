import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppStage, clientSlice, Snapshot } from "modules/client/slice";

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

type SetSnapshotArg = {
    snapshot: Snapshot;
    nextStage: AppStage;
};

export const setSnapshot = createAsyncThunk<void, SetSnapshotArg>(
    "client/set-sbapshot",
    ({ snapshot, nextStage }, thunkAPI) => {
        thunkAPI.dispatch(clientSlice.actions.setSnapshot(snapshot));
        thunkAPI.dispatch(changeStage({ stage: nextStage, ms: 1000 }));
    }
);
