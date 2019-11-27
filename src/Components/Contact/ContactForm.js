import React from "react";
import styled from "styled-components";

const Form = styled.form`
    width: 90%;
    padding: 5%;
    display: flex;
    flex-direction: column;

    input {
        width: 90%;
        padding: 8px;
        border-radius: 3px;
    }

    #date {
        width: 50%;
    }

    @media (min-width: 767px) {
        width: 85%;
        margin: auto;
    }

    @media (min-width: 1199px) {
        width: 60%;
    }
`

const Title = styled.h4`

    @media(min-width: 767px) {
        font-size: 1.4rem;
    }
`

const Name = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

const Cont = styled.div`
    width: 48%;
`

const Select = styled.select`
    width: 60%;
    padding: 8px;
    border-radius: 3px;
`

const Muted = styled.p`
    font-size: .8rem;
    color: #666;
    margin: 0;
`

const Button = styled.button`
    padding: 10px 20px;
    background-color: white;
    border: 2px solid black;
    margin: 20px auto;
    border-radius: 3px;
    width: 50%;
    font-weight: bold;

    &:hover {
        background-color: rgba(0,0,0,.1);
        transform: scale(1.1);
    }

    @media (min-width: 767px) {
        width: 30%;
    }
`

export default function ContactForm() {

    return (
        <Form>
            <Title>EMAIL ADDRESS *</Title>
            <input type="text" id="email" required placeholder="email@example.com"/>
            
            <Title>YOUR NAME *</Title>
            <Name>
                <Cont>
                <Muted htmlFor="first">FIRST NAME</Muted>
                <input type="text" id="first" required placeholder="First"/>
                </Cont>

                <Cont>
                <Muted htmlFor="last">LAST NAME</Muted>
                <input type="text" id="last" required placeholder="Last"/>
                </Cont>
            </Name>

            <Title>SIGNIFICANT OTHER</Title>
            <Name>
                <Cont>
                <Muted htmlFor="first1">FIRST NAME</Muted>
                <input type="text" id="first1" placeholder="First"/>
                </Cont>

                <Cont>
                <Muted htmlFor="last1">LAST NAME</Muted>
                <input type="text" id="last1"  placeholder="Last"/>
                </Cont>
            </Name>

            <Title htmlFor="event">WHAT CAN I CAPTURE FOR YOU? * </Title>
            <Select id="event">
                <option>WEDDING</option>
                <option>SENIOR</option>
                <option>NEWBORN</option>
                <option>MATERNITY</option>
                <option>ELOPMENT</option>
                <option>IN-HOME/LIFESTYLE</option>
                <option>FAMILY</option>
                <option>PORTRAITS</option>
                <option>OTHER</option>
            </Select>

            <Title>Where are you located?</Title>
            <textarea rows="5"/>

            <Title>DESIRED SESSION/EVENT DATE *</Title>
            <input type="date" id="date" required/>

            <Title>HOW DID YOU FIND ME? * </Title>
            <Muted>FACEBOOK? INSTAGRAM? WORD OF MOUTH? IF YOU WERE REFERRED BYS OMEONE PLEASE LIST THEIR NAME.</Muted>
            <textarea rows="5" required/>

            <Title>GIMME THE DEETS.</Title>
            <Muted>WHAT ABOUT MY PHOTOS CATCHES YOUR EYE? WHAT KIND OF VIBE ARE YOU GOING FOR? IF THIS IS A WEDDING, WHAT IS THE DATE + LOCATION?</Muted>
            <textarea rows="5"/>

            <Title>ALL THE EXTRA STUFF</Title>
            <Muted>IF THERE'S ANYTHING ELSE IMPORTANT OR THAT YOU FEEL I SHOULD KNOW, LIST IT HERE!</Muted>
            <textarea rows="5"/>

            <Button type="submit">SEND</Button>
        </Form>
    )
}