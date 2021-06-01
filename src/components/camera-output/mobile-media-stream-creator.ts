import { MediaStreamCreator } from "./use-media-stream";

export const mobileMediaStreamCreator: MediaStreamCreator = async (config) => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { exact: "environment" },
            width: { ideal: config.height },
            height: { ideal: config.width },
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
            width: { ideal: config.width },
            height: { ideal: config.height },
        },
    });

    return {
        stream,
    };
};
