import * as React from "react";

export type MediaStreamConfig = {
    width: number;
    height: number;
};

export type MediaStreamDescriptor = {
    stream: MediaStream | null;
    needToFlip?: boolean;
};

export type MediaStreamCreator = (
    config: MediaStreamConfig
) => Promise<MediaStreamDescriptor> | null;

export const useMediaStream = (
    mediaStreamCreators: MediaStreamCreator[],
    config: MediaStreamConfig
): [MediaStreamDescriptor | null, string | undefined] => {
    const [
        descriptor,
        setDescriptor,
    ] = React.useState<MediaStreamDescriptor | null>(null);
    const [error, setError] = React.useState<string>();

    React.useEffect(() => {
        createMediaStream(mediaStreamCreators, config)
            .then((stream) => stream && setDescriptor(stream))
            .catch((error) => setError(error));

        return () => {
            descriptor?.stream?.getVideoTracks().map((track) => track.stop());
        };

    }, [
        setDescriptor,
        setError,
        // eslint-disable-next-line
        ...Object.values(config),
        // eslint-disable-next-line
        ...mediaStreamCreators,
    ]);

    return [descriptor, error];
};

const createMediaStream = async (
    creators: MediaStreamCreator[],
    config: MediaStreamConfig
) => {
    let lastError;

    for (const creator of creators) {
        try {
            return await creator(config);
        } catch (error) {
            console.error("MediaStreamCreator", error);

            lastError = error;
        }
    }

    throw lastError;
};
