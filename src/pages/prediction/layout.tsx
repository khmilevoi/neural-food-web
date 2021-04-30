import { SwipeContainer } from "components/swipe-container";
import { PageWrapper } from "pages/page-wrapper";
import * as React from "react";
import * as Client from "modules/client";
import * as Model from "modules/model";
import { Container, ImagePreview } from "./styles";

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
                    {predictions.map((prediction) => (
                        <div>
                            <img src={prediction.label.image} />
                            {prediction.label.title} - {prediction.accuracy}
                        </div>
                    ))}
                </SwipeContainer>
            </Container>
        </PageWrapper>
    );
};

export default Layout;
