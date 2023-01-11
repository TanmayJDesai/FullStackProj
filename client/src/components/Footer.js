import React from "react";
import styled from "styled-components";
import { Container, Stack } from 'react-bootstrap';
import { FaCopyright } from 'react-icons/fa';
import instaLogo from '../images/insta.jpeg'

const Styles = styled.div`
    .footer-main {
        background-color: #181818;
        background-size: cover;
        height: 200px;
    }
    .logo {
        position: relative;
        left: 10%;
        margin-right: 70px;
        margin-left: 30px;
    }
    .text {
        color: #FFB81C !important;
        vertical-align: middle;
        text-align: left;
        left: 40%
        font-family: Georgia;
        font-size: 75px;
        position: relative;
    }
    .footer-copyright {
        background-color: #000000;
        background-size: cover;
        height: 100%;
        text-align: center;
        position: relative;
    }
    .copyright {
        color: white;
        position: relative;
        font-family: Georgia;
        font-size: 15px;
        vertical-align: middle;
    }

    .instagram-section {
        display: grid;
        grid-template-columns: auto;
        grid-template-rows: minmax(min-content, max-content);
        place-items: center;
    }

    #instagram-section img {
        width:50px;
        height:50px;
    }
    
    #follow-us {

        color: white;
    }
`;


export const Footer = () => (
    <Styles>
     <Container fluid className="footer-copyright">
    <div id="instagram-section">
        <span id="follow-us">Follow us on Instagram!</span>
        <a href="https://www.instagram.com/ta.anmay/" target="_blank">
            <img src={instaLogo} alt="icon" />
        </a>
        <div class='copyright-section'>
            <p className="copyright">
                <FaCopyright size={10} color={"white"} /> Copyright 2022 Tutor Stem. All rights reserved.
            </p>
        </div>
    </div>
</Container>
    </Styles>
)