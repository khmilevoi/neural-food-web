import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

type FadeInProps = {
    duration: number;
};

export const FadeIn = styled.div<FadeInProps>`
    animation: ${fadeIn} ${(props) => props.duration}s linear 1;
`;
