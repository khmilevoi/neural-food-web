import { AppStage, PageProps } from "modules/client";
import { loaderSlice } from "modules/loader";
import { loadData } from "modules/loader/actions";
import { Loader } from "pages/loading/loader";
import { Container } from "pages/loading/styles";
import { PageWrapper } from "pages/page-wrapper";
import * as React from "react";
import { useDispatch } from "react-redux";
import { PickString } from "shared/types";

const Layout: React.FC<PageProps<"load-labels" | "load-model">> = ({
    stage,
}) => {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(loaderSlice.actions.setProgress(0));
    }, [dispatch, stage]);

    return (
        <PageWrapper>
            <Container>
                <Loader action={actions[stage]} title={titles[stage]} />
            </Container>
        </PageWrapper>
    );
};

const actions: {
    [key in PickString<AppStage, "load-labels" | "load-model">]: Function;
} = {
    "load-model": () => loadData({ entity: "model", nextStage: "load-labels" }),
    "load-labels": () => loadData({ entity: "labels", nextStage: "camera" }),
};

const titles: {
    [key in PickString<AppStage, "load-labels" | "load-model">]: string;
} = {
    "load-model": "Load model",
    "load-labels": "Load labels",
};

export default Layout;
