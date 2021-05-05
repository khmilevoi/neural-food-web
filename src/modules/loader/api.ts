import axios, {CancelToken} from "axios";
import * as Label from "modules/label";
import * as Model from "modules/model";
import {endpoints} from "shared";


export const loaderApi = {
    model: async (
        onDownloadProgress: (progressEvent: ProgressEvent) => void,
        cancelToken?: CancelToken
    ) => {
        const response = await axios.get<Model.Entity>(
            endpoints.model,
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
        const response = await axios.get<Label.Entity[]>(
            endpoints.labels,
            {
                cancelToken,
                onDownloadProgress,
            }
        );
        
        return response.data;
    },
};
