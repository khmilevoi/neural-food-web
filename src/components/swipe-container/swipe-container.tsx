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
    const containerRef = React.useRef<HTMLDivElement>(null);

    const [createHandler, shift] = useTouch(HEADER_SIZE, containerHeight);

    React.useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.top = `calc(100% - ${shift}px)`;
        }
    }, [shift, containerRef]);

    return (
        <Container ref={containerRef}>
            <Header
                height={HEADER_SIZE}
                onTouchStart={createHandler("start")}
                onTouchEnd={createHandler("end")}
                onTouchMove={createHandler("move")}
            >
                <ActiveElement />
            </Header>
            <Content header={HEADER_SIZE}>{children}</Content>
        </Container>
    );
};
