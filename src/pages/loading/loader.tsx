import { useLoader } from "modules/loader";
import { Circle, CircleContainer, CircleTitle } from "pages/loading/styles";
import * as React from "react";
import { CircularProgressbar } from "react-circular-progressbar";

import "react-circular-progressbar/dist/styles.css";

import { useDispatch } from "react-redux";

type LoaderProps = {
    title: string;
    action: Function;
};

export const Loader: React.FC<LoaderProps> = ({ action, title }) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(action());
    }, [dispatch, action]);

    const loader = useLoader();

    return (
        <CircleContainer>
            <Circle>
                <CircularProgressbar
                    value={loader.progress}
                    text={`${loader.progress}%`}
                />
                <CircleTitle>{title}</CircleTitle>
            </Circle>
        </CircleContainer>
    );
};
