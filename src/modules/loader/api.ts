import axios, { CancelToken } from "axios";
import * as Label from "modules/label";
import * as tf from "@tensorflow/tfjs";
import { endpoints } from "shared";

class L2 {
    static className = "L2";
    
    constructor(config: any) {
        return tf.regularizers.l1l2(config);
    }
}

// @ts-ignore
tf.serialization.registerClass(L2);

export const loaderApi = {
    model: (onDownloadProgress: (fraction: number) => void) => {
        return tf.loadLayersModel(endpoints.model, {
            onProgress: (value) => onDownloadProgress(value * 100),
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
