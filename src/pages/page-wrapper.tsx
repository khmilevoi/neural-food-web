import { Animations } from "pages/animations";
import * as React from "react";

export const PageWrapper: React.FC = ({ children }) => {
    return (
        <Animations.FadeIn
            duration={0.5}
            style={{
                width: "100%",
                height: "100%",
            }}
        >
            {children}
        </Animations.FadeIn>
    );
};
