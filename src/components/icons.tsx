import { IconName } from "@fortawesome/fontawesome-common-types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

type IconProps = {
    type: IconName | IconDefinition;
};

export const Icon: React.FC<IconProps> = ({ type }) => {
    return <FontAwesomeIcon icon={type} />;
};

export const BackIcon = () => <Icon type={faChevronLeft} />;
