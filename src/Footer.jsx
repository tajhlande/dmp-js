import React from "react";
import {
    Box,
    FooterLink,
} from "./FooterStyles";

const Footer = (props) => {
    return (
        <Box>
            <FooterLink href={props.url} target="_blank" rel="noreferrer">{props.text}</FooterLink>
         </Box>
    );
};
export default Footer;