import axios, { CancelToken } from "axios";
import * as Label from "modules/label";
import * as tf from "@tensorflow/tfjs";
import { endpoints } from "shared";

export const loaderApi = {
    model: (onDownloadProgress: (fraction: number) => void) => {
        return tf.loadLayersModel(endpoints.model, {
            onProgress: onDownloadProgress,
        });
    },
    labels: async (
        onDownloadProgress: (fraction: number) => void,
        cancelToken?: CancelToken
    ) => {
        const response = await axios.get<Label.Entity[]>(endpoints.labels, {
            cancelToken,
            onDownloadProgress: (event) =>
                onDownloadProgress((event.loaded * 100) / event.total),
        });

        return response.data;
    },
};
