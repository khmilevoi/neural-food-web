import { CameraOutput } from "components/camera-output";
import { setSnapshot } from "modules/client/actions";
import { Container, PhotoButtonContainer } from "pages/camera/styles";
import { PageWrapper } from "pages/page-wrapper";
import * as React from "react";
import { useDispatch } from "react-redux";

const Layout: React.FC = () => {
    const dispatch = useDispatch();

    const handleTakeSnapshot = React.useCallback(
        (snapshot: Blob) => {
            dispatch(setSnapshot({ snapshot, nextStage: "prediction" }));
        },
        [dispatch]
    );

    return (
        <PageWrapper>
            <Container>
                <CameraOutput
                    width={window.innerWidth}
                    height={window.innerHeight}
                    buttonElement={<PhotoButton />}
                    onTakeSnapshot={handleTakeSnapshot}
                />
            </Container>
        </PageWrapper>
    );
};

const PhotoButton: React.FC = () => {
    return <PhotoButtonContainer />;
};

export default Layout;
