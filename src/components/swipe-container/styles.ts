import styled from "styled-components";

type ContainerProps = {
    shift: number;
};

export const Container = styled.div<ContainerProps>`
    width: 100%;
    height: 100%;
    position: absolute;
    top: calc(100% - ${({ shift }) => shift}px);
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

export const Content = styled.div`
    background-color: white;
    display: flex;
    flex-direction: column;
    height: 100%;
    overflow-y: auto;
    padding-top: 15px;
`;
