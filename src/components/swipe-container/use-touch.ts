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

            const shift = max - normalizeNumber(touch.pageY, 0, max - min);

            setShift(shift);
        },
        [setStage, setShift, max, min]
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

const normalizeNumber = (num: number, min: number, max: number) => {
    if (num < min) {
        return min;
    }

    if (num > max) {
        return max;
    }

    return num;
};
