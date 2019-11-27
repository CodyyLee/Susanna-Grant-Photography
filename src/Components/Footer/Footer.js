import React from "react";
import styled from "styled-components";
import {FaFacebookSquare, FaInstagram} from "react-icons/fa";

const Foot = styled.footer`
    width: 100%;
    background-color: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Muted = styled.p`
    opacity: 0.5;
`

const Container = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Link = styled.a`
    color: #000;
    text-decoration-color: #999;

    &:hover {
        color: #999;
    }

`

const Cont = styled.div`

    .social {
        width: 50px;
        height: 50px;
        margin: 10px;
    }
`

export default function Footer() {

    return (
        <Foot>
            <Muted>Susanna Grant Photography</Muted>

            <Container>
                <Link href="tel:2086156967">(208) 615-6967</Link>

                <Link href="mailto:susannagrantphoto@icloud.com">susannagrantphoto@icloud.com</Link>

                <Cont>
                    <Link href="https://www.facebook.com/susannagrantphoto">
                        <FaFacebookSquare  className="social"/>
                    </Link>

                    <Link href="https://www.instagram.com/susannagrantphotography/">
                        <FaInstagram  className="social"/>
                    </Link>
                </Cont>
            </Container>
        </Foot>
    )
}