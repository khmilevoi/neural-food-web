import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    position: absolute;
    transition: 0.1s;
`;

type HeaderProps = {
    height: number;
};

export const Header = styled.div<HeaderProps>`
    height: ${({ height }) => height}px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 99999px 99999px 0 0;
    background-color: white;
`;

export const ActiveElement = styled.div`
    width: 50px;
    height: 5px;
    border-radius: 99999px;
    background-color: silver;
    cursor: pointer;
`;

type ContentProps = {
    header: number;
};

export const Content = styled.div<ContentProps>`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: calc(100% - ${({ header }) => header}px);
    overflow-y: auto;
    padding-top: 15px;
`;
