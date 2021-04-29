import * as React from "react";
import { Suspense } from "react";
import { Provider as ReduxProvider } from "react-redux";
import { store } from "store";

export const Provider: React.FC = ({ children }) => {
    return (
        <ReduxProvider store={store}>
            <Suspense fallback={""}>{children}</Suspense>
        </ReduxProvider>
    );
};
