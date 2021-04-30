import * as React from "react";
import * as Client from "modules/client";

type RouterProps = {
    pages: Client.Page[];
};

export const Router: React.FC<RouterProps> = ({ pages }) => {
    const client = Client.useClient();

    const route = React.useMemo(() => {
        return pages.find(
            (page) =>
                page.stage === client.stage || page.stage.includes(client.stage)
        );
    }, [client.stage, pages]);

    const Component = route?.component ?? React.Fragment;

    return <Component stage={client.stage} />;
};
