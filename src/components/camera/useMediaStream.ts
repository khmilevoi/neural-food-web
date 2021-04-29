import * as React from "react";

export const useMediaStream = (): [
    MediaStream | undefined,
    string | undefined
] => {
    const [stream, setStream] = React.useState<MediaStream>();
    const [error, setError] = React.useState<string>();

    React.useEffect(() => {
        createVideoStream()
            .then((stream) => {
                setStream(stream);
            })
            .catch((error) => {
                console.error(error);

                setError("Camera is not available");
            });
    }, [setStream, setError]);

    return [stream, error];
};

const createVideoStream = () => {
    const getUserMedia = navigator.mediaDevices.getUserMedia;

    return getUserMedia({
        video: true,
    });
};
