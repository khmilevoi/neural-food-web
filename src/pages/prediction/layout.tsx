import { SwipeContainer } from "components/swipe-container";
import { PageWrapper } from "pages/page-wrapper";
import * as React from "react";
import * as Client from "modules/client";
import { Container, ImagePreview } from "./styles";

const Layout: React.FC = () => {
    const client = Client.useClient();

    if (client.snapshot == null) {
        return null;
    }

    return (
        <PageWrapper>
            <Container>
                <ImagePreview src={URL.createObjectURL(client.snapshot)} />

                <SwipeContainer containerHeight={window.innerHeight}>
                    {content}
                </SwipeContainer>
            </Container>
        </PageWrapper>
    );
};

const content = Array.from(Array(50), (_, index) => {
    return <p key={index}>JOKER</p>;
});

export default Layout;
