import * as Client from "modules/client";
import * as Label from "modules/label";
import { Entity } from "modules/model/entity";
import { useModel } from "modules/model/use-model";
import * as tf from "@tensorflow/tfjs";
import * as React from "react";

export type Prediction = {
    accuracy: number;
    label: Label.Entity;
};

export const usePredictions = (
    modelDescriptor?: Entity,
    snapshot?: Client.Snapshot,
    labels?: Label.Entity[]
) => {
    const model = useModel(modelDescriptor);
    const [prediction, setPrediction] = React.useState<Prediction[]>([]);

    React.useEffect(() => {
        const predict = async () => {
            if (model == null || snapshot == null || labels == null) {
                return [];
            }

            const prediction = await predictImage(snapshot, model);

            const result = prediction.map<Prediction>((accuracy, index) => ({
                accuracy,
                label: labels[index],
            }));

            setPrediction(
                result.sort((left, right) => {
                    return right.accuracy - left.accuracy;
                })
            );
        };

        predict().catch();
    }, [model, snapshot, setPrediction, labels]);

    return prediction;
};

const predictImage = async (
    target: Blob,
    model: tf.LayersModel
): Promise<number[]> => {
    const image = await blobToImage(target);

    const data = tf.browser.fromPixels(image).expandDims();

    const predict = await model.predict(data);

    if (Array.isArray(predict)) {
        const promises = predict.map((item) => item.data());

        const results = await Promise.all(promises);
        const numbers = results.map((result) => Array.from(result));

        return numbers.reduce((result, current) => [...result, ...current]);
    }

    return Array.from(await predict.data());
};

const blobToImage = (image: Blob) => {
    const img = document.createElement("img");

    img.src = URL.createObjectURL(image);

    return new Promise<HTMLImageElement>((resolve) => {
        img.onload = () => {
            resolve(img);
        };
    });
};
