import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100%;
    overflow: hidden;
    position: relative;
`;

export const ImagePreview = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const Prediction = styled.div`
    display: flex;
`;

export const PredictionImage = styled.img`
    width: 40%;
    height: 100px;
    object-fit: cover;
`;

export const PredictionInfo = styled.div`
    padding: 0 15px;
`;

export const PredictionTitle = styled.div`
    font-size: 20px;
`;

export const PredictionAccuracy = styled.div`
    color: silver;
`;

export const PredictionLine = styled.div``;
