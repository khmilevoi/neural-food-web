import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const PhotoButtonContainer = styled.div`
    --size: 70px;

    background-color: white;
    width: var(--size);
    height: var(--size);
    border-radius: calc(var(--size) / 2);

    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);

    &:active {
        opacity: 0.8;
    }
`;

export const LoadButtonContainer = styled.div`
    color: white;
    font-size: 25px;
`;
