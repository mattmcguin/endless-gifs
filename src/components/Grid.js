import React from "react";
import styled from "styled-components";
import Masonry from "react-masonry-component";
import Gif from "./Gif";

const Grid = styled(Masonry)`
    margin: 0 auto;
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
    if (list.length === 0)
        return (
            <InformativeTextWrapper>
                <InformativeText>{infoText}</InformativeText>
            </InformativeTextWrapper>
        );

    return (
        <Grid options={{ columnWidth: 345, fitWidth: true }}>
            {list.map((gif, index) => {
                return <Gif key={gif.slug} gif={gif} index={index} {...rest} />;
            })}
        </Grid>
    );
};

export default _Grid;
