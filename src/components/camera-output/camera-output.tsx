import { useMediaStream } from "components/camera-output/use-media-stream";
import { useTakePictureCallback } from "components/camera-output/use-take-picture-callback";
import { CantDisplayIcon } from "components/icons";
import * as React from "react";
import {
    Container,
    PhotoButtonContainer,
    Error,
    LoadPhotoInput,
    PhotoButtons,
    LeftPhotoButton,
} from "./styles";

type CameraOutputProps = {
    width: number;
    height: number;
    takeSnapshotElement: React.ReactElement;
    loadPhotoElement: React.ReactElement;
    onLoadPhoto: (snapshot: Blob) => void;
};

export const CameraOutput: React.FC<CameraOutputProps> = ({
    height,
    width,
    takeSnapshotElement,
    loadPhotoElement,
    onLoadPhoto,
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
        const picture = await takePicture();

        if (picture) {
            onLoadPhoto(picture);
        }
    }, [takePicture, onLoadPhoto]);

    return (
        <Container width={width} height={height}>
            <video ref={videoRef} autoPlay />

            {error && (
                <Error>
                    <CantDisplayIcon />
                </Error>
            )}

            <PhotoButtons>
                <LoadPhotoButton onLoad={onLoadPhoto}>
                    {loadPhotoElement}
                </LoadPhotoButton>

                <PhotoButtonContainer
                    onClick={handleClick}
                    disabled={!stream || !!error}
                >
                    {takeSnapshotElement}
                </PhotoButtonContainer>
            </PhotoButtons>
        </Container>
    );
};

type LoadPhotoButtonProps = {
    onLoad: (photo: Blob) => void;
};

const LoadPhotoButton: React.FC<LoadPhotoButtonProps> = ({
    children,
    onLoad,
}) => {
    const handleChange = React.useCallback(
        async (event: React.ChangeEvent<HTMLInputElement>) => {
            const file = event.currentTarget.files?.item(0);

            if (file) {
                const blob = new Blob([await file.arrayBuffer()]);

                onLoad(blob);
            }
        },
        [onLoad]
    );

    return (
        <LeftPhotoButton>
            <label htmlFor={"photo"}>{children}</label>
            <LoadPhotoInput
                type={"file"}
                id={"photo"}
                onChange={handleChange}
            />
        </LeftPhotoButton>
    );
};
