import * as tf from "@tensorflow/tfjs";
import { Entity } from "modules/model/entity";
import React from "react";

class L2 {
    static className = "L2";

    constructor(config: any) {
        return tf.regularizers.l1l2(config);
    }
}

// @ts-ignore
tf.serialization.registerClass(L2);

export const useModel = (modelDescriptor?: Entity) => {
    const [model, setModel] = React.useState<tf.LayersModel>();

    React.useEffect(() => {
        if (modelDescriptor) {
            tf.loadLayersModel({
                load: async () => modelDescriptor,
            })
                .then((currentModel) => {
                    setModel(currentModel);
                })
                .catch((error) => {
                    console.error(error);
                });
        }
    }, [modelDescriptor]);

    return model;
};
