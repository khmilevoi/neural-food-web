import { useTouch } from "./use-touch";
import * as React from "react";
import { ActiveElement, Container, Content, Header } from "./styles";

type SwipeContainerProps = {
    containerHeight: number;
};

const HEADER_SIZE = 55;

export const SwipeContainer: React.FC<SwipeContainerProps> = ({
    containerHeight,
    children,
}) => {
    const [createHandler, shift] = useTouch(HEADER_SIZE, containerHeight);

    return (
        <Container shift={shift}>
            <Header
                height={HEADER_SIZE}
                onTouchStart={createHandler("start")}
                onTouchEnd={createHandler("end")}
                onTouchMove={createHandler("move")}
            >
                <ActiveElement />
            </Header>
            <Content>{children}</Content>
        </Container>
    );
};
