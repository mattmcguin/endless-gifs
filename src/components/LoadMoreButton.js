import React from "react";
import styled from "styled-components";

const Button = styled.button`
    height: 3rem;
    margin: 2rem;
    color: white;
    background: linear-gradient(-45deg, #4eaeca, #552b97);
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
    cursor: pointer;
`;

const LoadMoreButton = ({ action }) => {
    return <Button onClick={() => action()}>Load More</Button>;
};

export default LoadMoreButton;
