import * as React from "react";

type TouchStage = "start" | "move" | "default";
type TouchAction = "start" | "move" | "end";
type CreateHandler = (action: TouchAction) => (event: React.TouchEvent) => void;

export const useTouch = (
    min: number,
    max: number
): [CreateHandler, number, TouchStage] => {
    const [stage, setStage] = React.useState<TouchStage>("default");
    const [shift, setShift] = React.useState(55);

    const handleTouchStart = React.useCallback(() => {
        setStage("start");
    }, [setStage]);

    const handleTouchEnd = React.useCallback(() => {
        const topDiff = Math.abs(max - shift);
        const bottomDiff = Math.abs(min - shift);

        if (topDiff < bottomDiff) {
            setShift(max);
        }

        if (bottomDiff < topDiff) {
            setShift(min);
        }

        setStage("default");
    }, [shift, setShift, setStage, max, min]);

    const handleTouchMove = React.useCallback(
        (event: React.TouchEvent) => {
            setStage("move");

            const touch = event.targetTouches.item(0);

            const shift = max - normalizeNumber(touch.pageY);

            setShift(shift);
        },
        [setStage, setShift, max]
    );

    const createHandler = React.useCallback<CreateHandler>(
        (action) => {
            switch (action) {
                case "move":
                    return handleTouchMove;
                case "end":
                    return handleTouchEnd;
                case "start":
                    return handleTouchStart;
            }
        },
        [handleTouchStart, handleTouchMove, handleTouchEnd]
    );

    return [createHandler, shift, stage];
};

const normalizeNumber = (num: number) => {
    if (num < 0) {
        return 0;
    }

    return num;
};
