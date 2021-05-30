import { MediaStreamCreator } from "./use-media-stream";

export const desktopMediaStreamCreator: MediaStreamCreator = async (config) => {
    const stream = await navigator.mediaDevices.getUserMedia({
        video: {
            facingMode: { exact: "user" },
            width: config.width,
            height: config.height,
        },
    });

    return {
        stream,
        needToFlip: true,
    };
};
