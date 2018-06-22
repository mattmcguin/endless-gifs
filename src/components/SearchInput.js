import React from "react";
import styled from "styled-components";

const Input = styled.input`
    height: 3rem;
    width: 50%;
    padding: 0 1rem;
    border: none;
    border-radius: 0;
    font-size: 1.3rem;
`;

const SearchInput = ({ searchValue, updateState }) => (
    <Input
        type="text"
        placeholder="Search for GIFs"
        value={searchValue}
        onChange={e => updateState(e.target.value)}
    />
);

export default SearchInput;
