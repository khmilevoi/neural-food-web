import { SwipeContainer } from "components/swipe-container";
import { PageWrapper } from "pages/page-wrapper";
import * as React from "react";
import * as Client from "modules/client";
import * as Model from "modules/model";
import {
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

    if (client.snapshot == null || client.model == null) {
        return null;
    }

    return (
        <PageWrapper>
            <Container>
                <ImagePreview src={URL.createObjectURL(client.snapshot)} />

                <SwipeContainer containerHeight={window.innerHeight}>
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
                                Name: {item.label.title}
                            </PredictionTitle>
                        </PredictionLine>

                        <PredictionLine>
                            <PredictionAccuracy>
                                Accuracy: {item.accuracy.toFixed(2)}
                            </PredictionAccuracy>
                        </PredictionLine>
                    </PredictionInfo>
                </Prediction>
            ))}
        </>
    );
};

export default Layout;
