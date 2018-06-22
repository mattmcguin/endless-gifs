import React, { Component } from "react";
import styled from "styled-components";
import NavBar from "./components/NavBar";
import Grid from "./components/Grid";
import Form from "./components/Form";
import LoadMoreButton from "./components/LoadMoreButton";
import { searchAPICall, trendingAPICall } from "./api";

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Header = styled.div`
    margin: 2rem 0 1rem 0;
    border-width: 0.5rem;
    border-style: solid;
    border-image: linear-gradient(-45deg, #4eaeca, #552b97) 1;
    cursor: pointer;
`;

const HeaderText = styled.h1`
    color: white;
    padding: 0.5rem 1rem;
    margin: 0;
    font-style: italic;

    @media (max-width: 450px) {
        padding: 0.5rem;
    }
`;

const GridContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;
`;

export default class App extends Component {
    constructor() {
        super();
        this.state = {
            searchValue: "",
            trendingGifList: [],
            gifsList: [],
            favoritesList: [],
            tab: "home"
        };
        this.loadTrendingGifs();
    }

    loadTrendingGifs = () => {
        trendingAPICall(this.state.trendingGifList).then(data => {
            return this.setState({ trendingGifList: data });
        });
    };

    loadSearchGifs = shouldLoadNew => {
        searchAPICall(
            shouldLoadNew,
            this.state.gifsList,
            this.state.searchValue
        ).then(data => this.setState({ gifsList: data }));
    };

    addGIFToFavorites = gif => {
        // Check if gif is already in favorites
        if (!this.state.favoritesList.includes(gif)) {
            this.setState({
                favoritesList: this.state.favoritesList.concat(gif)
            });
        }
    };

    removeGIFFromFavorites = index => {
        this.setState({
            favoritesList: this.state.favoritesList.filter(
                (_, i) => i !== index
            )
        });
    };

    resetSearch = () => {
        this.setState({
            tab: "home",
            searchValue: "",
            gifsList: []
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        this.setState({
            tab: "home"
        });
        this.loadSearchGifs(true);
    };

    render() {
        const showSearch = this.state.gifsList.length > 0;
        const listToRender = showSearch
            ? this.state.gifsList
            : this.state.trendingGifList;
        const loadFunction = showSearch
            ? this.loadSearchGifs
            : this.loadTrendingGifs;

        return (
            <Container>
                <Header onClick={this.resetSearch}>
                    <HeaderText>Endless GIFs</HeaderText>
                </Header>
                <Form
                    searchValue={this.state.searchValue}
                    handleSubmit={this.handleSubmit}
                    updateState={value => this.setState({ searchValue: value })}
                />
                <NavBar
                    tab={this.state.tab}
                    updateState={tab => this.setState({ tab: tab })}
                />
                {this.state.tab === "home" && (
                    <GridContainer>
                        <Grid
                            list={listToRender}
                            action={this.addGIFToFavorites}
                            buttonText="Add To Favorites"
                            add
                        />
                        <LoadMoreButton action={loadFunction} />
                    </GridContainer>
                )}
                {this.state.tab === "favorites" && (
                    <GridContainer>
                        <Grid
                            list={this.state.favoritesList}
                            action={this.removeGIFFromFavorites}
                            buttonText="Remove From Favorites"
                            infoText="Currently No Favorites!"
                        />
                    </GridContainer>
                )}
            </Container>
        );
    }
}
