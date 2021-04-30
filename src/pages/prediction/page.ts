import { lazy } from "react";
import * as Client from "modules/client";

export const Page: Client.Page = {
    stage: "prediction",
    component: lazy(() => import(/* webpackChunkName: "loading" */ "./layout")),
};
