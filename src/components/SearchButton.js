import React from "react";
import styled from "styled-components";

const Button = styled.button`
    height: 3rem;
    padding: 0 1rem;
    margin: 0;
    background: linear-gradient(-45deg, #4eaeca, #552b97);
    color: white;
    border: none;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
    cursor: pointer;
`;

const SearchButton = () => <Button type="submit">Search</Button>;

export default SearchButton;
