import * as React from "react";

type UseMediaStreamProps = {
    width: number;
    height: number;
};

export const useMediaStream = ({
    height,
    width,
}: UseMediaStreamProps): [MediaStream | undefined, string | undefined] => {
    const [stream, setStream] = React.useState<MediaStream>();
    const [error, setError] = React.useState<string>();

    React.useEffect(() => {
        createVideoStream({ width, height })
            .then((stream) => {
                setStream(stream);
            })
            .catch((error) => {
                console.error(error);

                setError("Camera is not available");
            });
    }, [setStream, setError, width, height]);

    return [stream, error];
};

type CreateVideoStreamProps = UseMediaStreamProps;

const createVideoStream = (size: CreateVideoStreamProps) => {
    return new Promise<MediaStream>((resolve, reject) => {
        getUserMedia(
            {
                video: {
                    facingMode: {exact: "environment"},
                    width: size.height,
                    height: size.width
                },
            },
            (stream) => resolve(stream),
            (error) => reject(error)
        );
    });
};

const getUserMedia = (
    constraints: MediaStreamConstraints,
    successCallback: NavigatorUserMediaSuccessCallback,
    errorCallback: NavigatorUserMediaErrorCallback
) => {
    if ("getUserMedia" in navigator) {
        return navigator.getUserMedia(
            constraints,
            successCallback,
            errorCallback
        );
    }

    if ("webkitGetUserMedia" in navigator) {
        // @ts-ignore
        return navigator.webkitGetUserMedia(
            constraints,
            successCallback,
            errorCallback
        );
    }

    if ("mozGetUserMedia" in navigator) {
        // @ts-ignore
        return navigator.mozGetUserMedia(
            constraints,
            successCallback,
            errorCallback
        );
    }
};
