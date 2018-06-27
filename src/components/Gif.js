import React, { Component } from "react";
import styled from "styled-components";

const GifButton = styled.button`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 12rem;
    color: white;
    background: transparent;
    border: none;
    font-size: 1.5rem;
    opacity: 0;
    z-index: 3;
    cursor: pointer;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
`;

const OriginalImage = styled.img`
    z-index: 2;
    height: 100%;
    width: 100%;

    opacity: 0;

    transition: opacity 0.5s ease;
`;

const ImageContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
    color: ${props => props.color};
    background: ${props => props.color};
    background-image: ${props => "url(" + props.previewGif + ")"};
    background-repeat: no-repeat;
    background-size: 100% 100%;
    cursor: pointer;
`;

const GifContainer = styled.div`
    position: relative;
    height: ${props => props.height + "px"};
    width: 300px;
    margin: 0 0.5rem 1rem 0.5rem;

    &:hover ${ImageContainer} {
        transform: scale(1.025) !important;
        opacity: 0.1 !important;
    }

    &:hover ${GifButton} {
        opacity: 1;
    }

    &:active ${GifButton} {
        color: #4eaeca;
    }
`;

const colors = ["#552b97", "#4eaeca", "#F2F2F2", "#D3D3D3"];

class Gif extends Component {
    constructor(props) {
        super(props);
        this.container = null;
        this.loadedGif = null;
    }

    adjustStyles = () => {
        this.loadedGif.style.opacity = 1;
        this.container.style.background = "unset";
    };

    render() {
        const { gif, index, add, action, buttonText } = this.props;
        const HEIGHT = Number(gif.images.fixed_width.height) * 1.5;
        return (
            <GifContainer
                height={HEIGHT}
                onClick={() => action(add ? gif : index)}
            >
                <ImageContainer
                    innerRef={element => (this.container = element)}
                    color={colors[index % colors.length]}
                    previewGif={gif.images.preview_gif.url}
                >
                    <OriginalImage
                        src={gif.images.fixed_width.url}
                        alt={gif.title}
                        innerRef={element => (this.loadedGif = element)}
                        onLoad={this.adjustStyles}
                    />
                </ImageContainer>
                <GifButton type="button">{buttonText}</GifButton>
            </GifContainer>
        );
    }
}

export default Gif;
