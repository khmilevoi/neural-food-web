import { lazy } from "react";
import * as Client from "modules/client";

export const Page: Client.Page = {
    stage: "camera",
    component: lazy(() => import(/* webpackChunkName: "camera" */ "./layout")),
};
