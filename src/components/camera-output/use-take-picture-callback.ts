import * as React from "react";

type UseTakePictureCallbackProps = {
    video: HTMLVideoElement | null;
    width: number;
    height: number;
};

export const useTakePictureCallback = (
    options: UseTakePictureCallbackProps
) => {
    return React.useCallback(() => {
        return takePictureFromVideo(options);
    }, [options]);
};

type TakePictureFromVideoProps = UseTakePictureCallbackProps;

const takePictureFromVideo = async (options: TakePictureFromVideoProps) => {
    if (options.video == null) {
        return null;
    }

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");

    if (context == null) {
        return null;
    }

    canvas.width = options.width;
    canvas.height = options.height;

    context.drawImage(options.video, 0, 0, options.width, options.height);

    return await canvasToBlob(canvas);
};

const canvasToBlob = (canvas: HTMLCanvasElement) => {
    return new Promise<Blob | null>((resolve) => {
        canvas.toBlob((blob) => resolve(blob));
    });
};
