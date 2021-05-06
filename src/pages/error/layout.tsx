import * as Client from "modules/client";
import * as React from "react";
import { PageWrapper } from "../page-wrapper";

const Layout: React.FC = () => {
    const client = Client.useClient();

    return <PageWrapper>{client.error?.message}</PageWrapper>;
};

export default Layout;
