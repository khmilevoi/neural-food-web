import * as React from "react";
import { AppStage } from "modules/client/slice";

export type Page<Stage extends AppStage = any> = {
    stage: AppStage | AppStage[];
    component: React.ComponentType<PageProps<Stage>>;
};

export type PageProps<Stage extends AppStage = AppStage> = {
    stage: Stage;
};
