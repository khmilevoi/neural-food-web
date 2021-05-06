import * as Client from "modules/client";

import * as Camera from "pages/camera";
import * as Loading from "pages/loading";
import * as Prediction from "pages/prediction";
import * as Error from "pages/error";

export const pages: Client.Page[] = [
    Loading.Page,
    Camera.Page,
    Prediction.Page,
    Error.Page,
];
