import React from "react";
import styled from "styled-components";

const Title = styled.h3`
    text-align: center;

    @media (min-width: 767px) {
        font-size: 1.5rem;
    }
`

const Text = styled.p`
    text-align: center;
    width: 95%;
    padding: 2.5%;

    @media (min-width: 767px) {
        width: 85%;
        margin: auto;
    }

    @media (min-width: 1199px) {
        width: 60%;
    }
`

export default function Header() {

    return (
        <>
        <Title>TELL ME ALL ABOUT YOU</Title>

        <Text>GIVE ME ALL THE DETAILS. WHO ARE YOU? WHAT DO YOU LOVE? WHAT ABOUT YOUR PERSONAL STYLE MAKE YOU FEEL UNIQUE? IF YOU'RE INQUIRING ABOUT A COUPLES SESSION OR A WEDDING, HOW DID YOU MEET YOUR PARTNER IN CRIME? WHAT DO YOU LIKE TO DO TOGETHER? I WANT TO HEAR ALL THE MUSHY STUFF! LAY IT ON ME.</Text>
        </>
    )
}