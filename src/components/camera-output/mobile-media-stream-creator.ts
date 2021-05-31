// noinspection JSSuspiciousNameCombination

import { MediaStreamCreator } from "./use-media-stream";

export const mobileMediaStreamCreator: MediaStreamCreator = async (config) => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { exact: "environment" },
            width: config.height,
            height: config.width,
        },
    });

    return {
        stream,
    };
};

export const horizontalMobileMediaStreamCreator: MediaStreamCreator = async (
    config
) => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { exact: "environment" },
            width: config.width,
            height: config.height,
        },
    });

    return {
        stream,
    };
};
