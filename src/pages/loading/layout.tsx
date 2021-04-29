import * as Client from "modules/client";
import { AppStage } from "modules/client";
import { loaderSlice } from "modules/loader";
import * as React from "react";
import { useDispatch } from "react-redux";
import { loadData } from "modules/loader/actions";
import { Loader } from "pages/loading/loader";
import { Container } from "pages/loading/styles";
import { PageWrapper } from "pages/page-wrapper";

const Layout: React.FC = () => {
    const dispatch = useDispatch();
    const client = Client.useClient();

    React.useEffect(() => {
        dispatch(loaderSlice.actions.setProgress(0));
    }, [dispatch, client.stage]);

    return (
        <PageWrapper>
            <Container>
                <Loader
                    action={actions[client.stage]}
                    title={titles[client.stage]}
                />
            </Container>
        </PageWrapper>
    );
};

const actions: { [key in AppStage]: Function } = {
    "load-model": loadData("model", "load-labels"),
    "load-labels": loadData("labels", "camera"),
    camera: () => null,
};

const titles: { [key in AppStage]: string } = {
    "load-model": "Load model",
    "load-labels": "Load labels",
    camera: "none",
};

export default Layout;
