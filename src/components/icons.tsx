import { IconName } from "@fortawesome/fontawesome-common-types";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
    faCamera,
    faChevronLeft,
    faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";

type IconProps = {
    type: IconName | IconDefinition;
};

export const Icon: React.FC<IconProps> = ({ type }) => {
    return <FontAwesomeIcon icon={type} />;
};

export const BackIcon = () => <Icon type={faChevronLeft} />;

export const CantDisplayIcon = () => <Icon type={faEyeSlash} />;

export const CameraIcon = () => <Icon type={faCamera} />;
