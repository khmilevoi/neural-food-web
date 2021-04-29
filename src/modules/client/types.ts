import * as React from "react";
import { AppStage } from "modules/client/slice";

export type Page = {
    stage: AppStage | AppStage[];
    component: React.ComponentType;
};
