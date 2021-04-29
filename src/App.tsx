import { pages } from "pages/list";
import { Router } from "pages/router";
import { Provider } from "provider";
import React from "react";
import { Global } from "styles";

// expo find this component
export default function App() {
    return (
        <Provider>
            <Global />
            <Router pages={pages} />
        </Provider>
    );
}
