import React from "react";
import styled from "styled-components";
import Gif from "./Gif";

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: 1rem;
    justify-content: center;
    box-sizing: border-box;
    width: 100%;
    padding: 1rem 3rem;

    @media (max-width: 450px) {
        padding: 1rem;
    }
`;

const InformativeTextWrapper = styled.div`
    padding: 3rem;
    font-size: 1.3rem;
    text-align: center;

    @media (max-width: 450px) {
        padding: 3rem 1rem;
    }
`;

const InformativeText = styled.h1`
    color: white;
`;

const _Grid = ({ list, infoText, ...rest }) => {
    return (
        <Grid>
            {list.length > 0 ? (
                list.map((gif, index) => {
                    return (
                        <Gif key={gif.slug} gif={gif} index={index} {...rest} />
                    );
                })
            ) : (
                <InformativeTextWrapper>
                    <InformativeText>{infoText}</InformativeText>
                </InformativeTextWrapper>
            )}
        </Grid>
    );
};

export default _Grid;
