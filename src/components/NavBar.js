import React from "react";
import styled from "styled-components";

const NavButtons = styled.div`
    padding: 1rem;
`;

const Tab = styled.button`
    height: 2.5rem;
    margin: 0;
    color: ${props => (props.active ? "white" : "white")};
    background: ${props => (props.active ? "#4eaeca" : "transparent")};
    border: 1px solid lightgrey;
    font-size: 1.05rem;
    letter-spacing: 1px;
    transition: background 0.15s;
    min-width: 8rem;
    cursor: pointer;

    @media (max-width: 450px) {
        font-size: 0.8rem;
    }

    &:hover {
        background: #552b97;
    }
`;

const LeftTab = Tab.extend`
    border-radius: 10px 0 0 10px;
`;

const RightTab = Tab.extend`
    border-radius: 0 10px 10px 0;
`;

const NavBar = ({ tab, updateState }) => {
    return (
        <NavButtons>
            <LeftTab
                type="button"
                active={tab === "home"}
                onClick={() => updateState("home")}
            >
                SEARCH
            </LeftTab>
            <RightTab
                type="button"
                active={tab === "favorites"}
                onClick={() => updateState("favorites")}
            >
                FAVORITES
            </RightTab>
        </NavButtons>
    );
};

export default NavBar;
