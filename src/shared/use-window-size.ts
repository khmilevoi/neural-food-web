import React from "react";

export const useWindowSize = () => {
    const [width, setWidth] = React.useState(window.innerWidth);
    const [height, setHeight] = React.useState(window.innerHeight);

    React.useEffect(() => {
        const handler = () => {
            setWidth(window.innerWidth);
            setHeight(window.innerHeight);
        };

        window.addEventListener("resize", handler);

        return () => window.removeEventListener("resize", handler);
    }, [setWidth, setHeight]);

    return [width, height];
};
