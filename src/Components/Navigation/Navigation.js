import React from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

const Nav = styled.nav`
    width: 100%;
    height: 10vh;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Cont = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    width: 100%;

    @media (min-width: 767px) {
        width: 60%;
        display: flex;

    }
`

export default function Navigation() {

    return (
        <Nav>
            <Cont>
                <NavItem link="/" name="HOME"/>
                <NavItem link="/portfolio" name="PORTFOLIO"/>
                <NavItem link="/contact" name="CONTACT"/>
            </Cont>
        </Nav>
    )
}