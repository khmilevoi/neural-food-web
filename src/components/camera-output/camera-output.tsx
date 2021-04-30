import { useMediaStream } from "components/camera-output/use-media-stream";
import { useTakePictureCallback } from "components/camera-output/use-take-picture-callback";
import * as React from "react";
import { Container, Error, PhotoButtonContainer } from "./styles";

type CameraOutputProps = {
    width: number;
    height: number;
    buttonElement: React.ReactElement;
    onTakeSnapshot: (snapshot: Blob) => void;
};

export const CameraOutput: React.FC<CameraOutputProps> = ({
    height,
    width,
    buttonElement,
    onTakeSnapshot,
}) => {
    const videoRef = React.useRef<HTMLVideoElement>(null);

    const [stream, error] = useMediaStream({
        height,
        width,
    });

    React.useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);

    const takePicture = useTakePictureCallback({
        video: videoRef.current,
        width,
        height,
    });

    const handleClick = React.useCallback(async () => {
        const data = await takePicture();

        if (data) {
            onTakeSnapshot(data);
        }
    }, [takePicture, onTakeSnapshot]);

    if (error) {
        return <Container>{error && <Error>{error}</Error>}</Container>;
    }

    return (
        <Container>
            <video ref={videoRef} autoPlay />

            {stream && (
                <PhotoButtonContainer onClick={handleClick}>
                    {buttonElement}
                </PhotoButtonContainer>
            )}
        </Container>
    );
};
