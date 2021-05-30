import { CameraOutput } from "components/camera-output";
import { CameraIcon } from "components/icons";
import { setSnapshot } from "modules/client/actions";
import {
    Container,
    PhotoButtonContainer,
    LoadButtonContainer,
} from "pages/camera/styles";
import { PageWrapper } from "pages/page-wrapper";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useWindowSize } from "../../shared/use-window-size";

const Layout: React.FC = () => {
    const dispatch = useDispatch();

    const handleLoadPhoto = React.useCallback(
        (photo: Blob) => {
            dispatch(
                setSnapshot({
                    snapshot: photo,
                    nextStage: "prediction",
                })
            );
        },
        [dispatch]
    );

    const [width, height] = useWindowSize();

    return (
        <PageWrapper>
            <Container>
                <CameraOutput
                    width={width}
                    height={height}
                    takeSnapshotElement={<PhotoButton />}
                    loadPhotoElement={<LoadPhotoButton />}
                    onLoadPhoto={handleLoadPhoto}
                />
            </Container>
        </PageWrapper>
    );
};

const PhotoButton: React.FC = () => {
    return <PhotoButtonContainer />;
};

const LoadPhotoButton: React.FC = () => {
    return (
        <LoadButtonContainer>
            <CameraIcon />
        </LoadButtonContainer>
    );
};

export default Layout;
