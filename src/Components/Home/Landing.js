import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import About from "./About";
import img from "../../Images/image10.jpg";

const Hero = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${img});
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Overlay = styled.div`
    width: 100%;
    height: 100vh;
    margin-top: 10vh;
    background-color: rgba(255,255,255,0.5);
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
`

const Title = styled.h1`
    color: #000;
    text-align: right;
    padding: 3px;

    @media (min-width: 767px) {
        font-size: 3.5rem;
    }

    @media (min-width: 1199px) {
        font-size: 4rem;
    }
`

const Button = styled.button`
    padding: 10px 20px;
    background-color: rgba(0,0,0,0);
    border: 2px solid black;
    border-radius: 3px;
    font-weight: bold;
    font-size: 1.3rem;

    &:hover {
        background-color: rgba(0,0,0,.1);
        transform: scale(1.1);
    }

    @media (min-width: 767px) {
        font-size: 2rem;
    }
`

export default function Landing() {

    return(
        <>
            <Hero>
                <Overlay>
                <Title>SUSANNA GRANT PHOTOGRAPHY</Title>

                <Link to="/contact">
                    <Button>BOOK A SESSION</Button>
                </Link>
                </Overlay>
            </Hero>

            <About />
        </>
    )
}