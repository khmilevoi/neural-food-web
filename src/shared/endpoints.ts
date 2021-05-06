import {createPath} from "shared/config";


export const endpoints = {
    model: createPath("/model/model.json"),
    labels: createPath("/labels"),
};
