import React from "react";
import {NavLink} from "react-router-dom";
import styled from "styled-components";

const Text = styled.p`
    color: black;
    text-decoration: none;

    &:hover{
        opacity: 0.5;
    }
`

export default function NavItem(props) {

    return (
        <NavLink to={props.link}>
            <Text>{props.name}</Text>
        </NavLink>
    )
}