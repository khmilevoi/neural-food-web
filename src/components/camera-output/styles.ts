import styled from "styled-components";

type ContainerProps = {
    width: number;
    height: number;
};

export const Container = styled.div<ContainerProps>`
    position: relative;
    width: ${({ width }) => width}px;
    height: ${({ height }) => height}px;
    background-color: black;
`;

export const Error = styled.div`
    color: white;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    pointer-events: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 50px;
`;

export const PhotoButtons = styled.div`
    width: 100%;
    position: absolute;
    bottom: 50px;
    display: grid;

    grid-template-areas: "left center right";
`;

export const LeftPhotoButton = styled.div`
    grid-area: left;

    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

type PhotoButtonContainerProps = {
    disabled?: boolean;
};

export const PhotoButtonContainer = styled.div<PhotoButtonContainerProps>`
    grid-area: center;

    display: flex;
    align-items: center;
    justify-content: center;
    opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
    pointer-events: ${({ disabled }) => (disabled ? "none" : "auto")};
`;

export const LoadPhotoInput = styled.input`
    display: none;
`;
