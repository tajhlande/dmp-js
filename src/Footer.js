import React from "react";
import {
    Box,
    FooterLink,
} from "./FooterStyles";

const Footer = () => {
    return (
        <Box>
            <FooterLink href="https://en.wikipedia.org/wiki/Lorenz_system" target="_blank" rel="noreferrer">What is the Lorenz attractor?</FooterLink>
         </Box>
    );
};
export default Footer;