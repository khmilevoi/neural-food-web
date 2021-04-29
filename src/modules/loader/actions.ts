import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppStage, clientSlice } from "modules/client";
import { changeStage } from "modules/client/actions";
import { loaderApi } from "modules/loader/api";
import { loaderSlice } from "modules/loader/slice";

export const loadData = (entity: "model" | "labels", nextStage: AppStage) =>
    createAsyncThunk("loader/load-model", async (arg, thunkAPI) => {
        thunkAPI.dispatch(loaderSlice.actions.changeStatus("progress"));

        const onDownloadProgress = (progressEvent: ProgressEvent) => {
            const progress = (progressEvent.loaded * 100) / progressEvent.total;

            setTimeout(() => {
                thunkAPI.dispatch(
                    loaderSlice.actions.setProgress(Math.floor(progress))
                );
            }, 300);
        };

        if (entity === "model") {
            const model = await loaderApi.model(onDownloadProgress);

            thunkAPI.dispatch(clientSlice.actions.setModel(model));
        }

        if (entity === "labels") {
            const labels = await loaderApi.labels(onDownloadProgress);

            thunkAPI.dispatch(clientSlice.actions.setModel(labels));
        }

        thunkAPI.dispatch(loaderSlice.actions.changeStatus("default"));
        thunkAPI.dispatch(changeStage({ stage: nextStage, ms: 1000 }));
    });
