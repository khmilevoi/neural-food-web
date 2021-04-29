import { CameraOutput } from "components/camera";
import * as React from "react";
import { PageWrapper } from "pages/page-wrapper";

const Layout: React.FC = () => {
    return (
        <PageWrapper>
            <CameraOutput />
        </PageWrapper>
    );
};

export default Layout;
