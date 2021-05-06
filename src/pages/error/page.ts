import { lazy } from "react";
import * as Client from "modules/client";

export const Page: Client.Page = {
    stage: "error",
    component: lazy(() => import(/* webpackChunkName: "error" */ "./layout")),
};
