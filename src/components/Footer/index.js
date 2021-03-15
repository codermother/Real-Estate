import React from 'react'
import { Button } from '../Buttons/ButtonElements'
import { Link } from 'react-router-dom';
import {
    FaFacebook,
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";
import {
    FooterContainer,
    FooterWrap,
    FooterColumnLeft,
    FooterColumnRight,
    SocialMediaWrap,
    SocialIcons,
    SocialIconLink,
    Small,
    FooterLinkItems,
} from "./FooterElements"


const Footer = ({
    heading, 
    link1, 
    link2, 
    link3, 
    link4, 
    link5, 
    reverse}) => {

    return (
        <FooterContainer>
            <FooterWrap>                
                <FooterColumnLeft reverse={reverse}>
                    <h1>{heading}</h1>
                    <SocialMediaWrap>
                        <SocialIcons>
                        <SocialIconLink href={link1} target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href={link2} target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href={link3} target='_blank' aria-label='Youtube'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink
                            href={link4}
                            target='_blank'
                            aria-label='Twitter'
                            rel='noopener noreferrer'
                        >
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href={link5} target='_blank' aria-label='Linkedin'>
                            <FaLinkedin />
                        </SocialIconLink>
                        </SocialIcons>                   
                        
                    </SocialMediaWrap>
                </FooterColumnLeft>
                <FooterColumnRight >
                    <FooterLinkItems>
                        <h2>Contact Us</h2>
                        <Link to='/'>FAQ</Link>
                        <Link to='/'>Support</Link>
                        <Link to='/'>Questions</Link>
                        
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <h2>Offices</h2>
                        <Link to='/'>United States</Link>
                        <Link to='/'>Europe</Link>
                        <Link to='/'>Canada </Link>                                              
                    </FooterLinkItems>
                    <Button to="/homes" secondary="true">Let's Chat</Button>
                </FooterColumnRight>      
            </FooterWrap>
            <Small >CoderMother @2021</Small>  
        </FooterContainer>        
    )
}

export default Footer
