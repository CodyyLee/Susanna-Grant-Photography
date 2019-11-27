import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

import img from "../../Images/Susanna.jpg";

const Container = styled.div`
    width: 95%;
    padding: 2.5%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1199px) {
        flex-direction: row;
        justify-content: space-evenly;
        align-items: space-evenly;
    }
`

const Image = styled.img`
    max-width: 90%;

    @media (min-width: 1199px) {
        width: 45%;
    }
`

const Heading = styled.h3`
    width: 90%;
    text-align: center;
`

const P = styled.p`
    width: 95%;
    padding: 2.5%;
    text-align: center;
    margin: 0;

    @media (min-width: 767px) {
        margin: 0;
    }

    @media(min-width: 1199px) {
        width: 80%;
        margin: 0;
    }
`

const Button = styled.button`
    background-color: white;
    color: black;
    border: 2px solid black;
    padding: 10px 20px;
    border-radius: 3px;
    margin: 20px auto;
    font-weight: bold;

    &:hover {
        background-color: rgba(0,0,0,.1);
        transform: scale(1.1);
    }
`

const Cont = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    @media (min-width: 1199px) {
        margin: auto;
        width: 45%;
    }
`

export default function About() {

    return(
        <Container>
            <Image src={img}/>
            <Cont>
            <Heading>I'M SUSANNA. THE GIRL BEHIND THE CAMERA.</Heading>
            <P>I'M A PHOTOGRAPHER BASED OUT OF BOISE, IDAHO. I SPECIALIZE IN COUPLES, LIFESTYLE, WEDDINGS + EVERYTHING RAW, REAL AND EMOTIONAL. WHEN I'M NOT PHOTOGRAPHING SOMETHING YOU CAN FIND ME EXPLORING NATURE, HANGING OUT AT A CONCERT OR RE-WATCHING THE` OFFICE (FOR THE 100TH TIME).</P>

            <P>I'VE LOVED PHOTOGRAPHY FOR AS LONG AS i CAN REMEMBER + I'M CERTAIN THAT CAPTURING OTHER PEOPLE'S STORIES + LOVE IS MY PASSION AND CALLING.</P> 

            <P>I'M A FIRM BELIEVER THAT PHOTOS SHOULD BE ALL ABOUT WHAT'S REAL. NO POSED STUFF. NO AWKWARDNESS. NO LIES. I WANT YOU TO LOOK BACK AT YOUR PHOTOS FOR YEARS TO COME AND REMEMBER LAUGHING + LOVING THE MOMENT YOU WERE IN.</P>

            <P>THAT BEING SAID, WE'RE GONNA GET CLOSE. SOMETIMES TOO CLOSE. I WILL DO EVERYTHING IN MY POWER TO GET THE BEST POSSIBLE PHOTOS FOR YOU. EVEN IF THAT MEANS STANDING AWKWARDLY IN A TREE SO I CAN CAPTURE THE PERFECT ANGLE OF YOU + YOUR BABE. (IT'S HAPPENED BEFORE, IT'LL HAPPEN AGAIN).</P>

            <P>IWOULD LOVE TO MEET YOU + CHAT ABOUT YOUR VISION! CONTACT ME BELOW, LET'S GET SOME COFFEE OR WINE(OR BOTH) AND MAKE SOME MAGIC!</P>
            <Link to="/contact">
                <Button>CONTACT</Button>
            </Link>
            </Cont>
        </Container>
    )
}