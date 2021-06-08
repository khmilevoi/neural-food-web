import { createAsyncThunk } from "@reduxjs/toolkit";
import { AppStage, clientSlice } from "modules/client";
import { changeStage } from "modules/client/actions";
import { loaderApi } from "modules/loader/api";
import { loaderSlice } from "modules/loader/slice";

type LoadDataArg = {
    entity: "model" | "labels";
    nextStage: AppStage;
};

export const loadData = createAsyncThunk<void, LoadDataArg>(
    "loader/load-model",
    async ({ entity, nextStage }, thunkAPI) => {
        thunkAPI.dispatch(loaderSlice.actions.changeStatus("progress"));

        const onDownloadProgress = (progress: number) => {
            thunkAPI.dispatch(
                loaderSlice.actions.setProgress(Math.floor(progress))
            );
        };

        try {
            if (entity === "model") {
                const model = await loaderApi.model(onDownloadProgress);

                thunkAPI.dispatch(clientSlice.actions.setModel(model));
            }

            if (entity === "labels") {
                const labels = await loaderApi.labels(onDownloadProgress);

                thunkAPI.dispatch(
                    clientSlice.actions.setLabels(
                        labels.map((label) => ({
                            title: label.title,
                            image: `data:image/png;base64, ${label.image}`,
                        }))
                    )
                );
            }

            thunkAPI.dispatch(loaderSlice.actions.changeStatus("default"));
            thunkAPI.dispatch(changeStage({ stage: nextStage, ms: 1000 }));
        } catch (error) {
            console.error("Load data: ", error);

            thunkAPI.dispatch(clientSlice.actions.setError(error));
            thunkAPI.dispatch(changeStage({ stage: "error", ms: 0 }));
        }
    }
);
