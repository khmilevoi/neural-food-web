import { BackIcon } from "components/icons";
import { SwipeContainer } from "components/swipe-container";
import * as Client from "modules/client";
import { changeStage } from "modules/client/actions";
import * as Model from "modules/model";
import { PageWrapper } from "pages/page-wrapper";
import * as React from "react";
import { useDispatch } from "react-redux";
import { useWindowSize } from "shared/use-window-size";
import {
    BackButton,
    Container,
    ImagePreview,
    Prediction,
    PredictionAccuracy,
    PredictionImage,
    PredictionInfo,
    PredictionLine,
    PredictionTitle,
} from "./styles";

const Layout: React.FC = () => {
    const client = Client.useClient();

    const predictions = Model.usePredictions(
        client.model,
        client.snapshot,
        client.labels
    );

    const dispatch = useDispatch();

    const handleBack = React.useCallback(() => {
        dispatch(changeStage({ stage: "camera", ms: 0 }));
    }, [dispatch]);

    const [, height] = useWindowSize();

    const url = React.useMemo(() => URL.createObjectURL(client.snapshot), [
        client.snapshot,
    ]);

    if (client.snapshot == null || client.model == null) {
        return null;
    }

    return (
        <PageWrapper>
            <Container>
                <BackButton onClick={handleBack}>
                    <BackIcon />
                </BackButton>

                <ImagePreview src={url} />

                <SwipeContainer containerHeight={height}>
                    <Predictions list={predictions} />
                </SwipeContainer>
            </Container>
        </PageWrapper>
    );
};

type PredictionsProps = {
    list: Model.Prediction[];
};

const Predictions: React.FC<PredictionsProps> = ({ list }) => {
    return (
        <>
            {list.map((item) => (
                <Prediction key={item.label.title}>
                    <PredictionImage src={item.label.image} />

                    <PredictionInfo>
                        <PredictionLine>
                            <PredictionTitle>
                                {item.label.title}
                            </PredictionTitle>
                        </PredictionLine>

                        <PredictionLine>
                            <PredictionAccuracy>
                                Accuracy: {(item.accuracy * 100).toFixed(3)}%
                            </PredictionAccuracy>
                        </PredictionLine>
                    </PredictionInfo>
                </Prediction>
            ))}
        </>
    );
};

export default Layout;
