import axios, { CancelToken } from "axios";
import { createPath, endpoints } from "shared";
import * as Label from "modules/label";
import * as Model from "modules/model";

export const loaderApi = {
    model: async (
        onDownloadProgress: (progressEvent: ProgressEvent) => void,
        cancelToken?: CancelToken
    ) => {
        const response = await axios.get<Model.Entity>(
            createPath(endpoints.model),
            {
                cancelToken,
                onDownloadProgress,
            }
        );

        return response.data;
    },
    labels: async (
        onDownloadProgress: (progressEvent: any) => void,
        cancelToken?: CancelToken
    ) => {
        const response = await axios.get<{ list: Label.Entity[] }>(
            createPath(endpoints.labels),
            {
                cancelToken,
                onDownloadProgress,
            }
        );

        return response.data.list;
    },
};
