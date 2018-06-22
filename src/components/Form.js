import React from "react";
import styled from "styled-components";
import SearchInput from "./SearchInput";
import SearchButton from "./SearchButton";

const Form = styled.form`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 1rem;
`;

const _Form = ({ handleSubmit, ...rest }) => {
    return (
        <Form onSubmit={handleSubmit}>
            <SearchInput {...rest} />
            <SearchButton />
        </Form>
    );
};

export default _Form;
