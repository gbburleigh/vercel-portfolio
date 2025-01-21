import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #111;
    padding: 2rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100vw;
`;

const FooterLinks = styled.div`
    display: flex;
    gap: 2rem;
    margin-bottom: 1rem;
`;

const FooterLink = styled.a`
    color: #eee;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
        color: #fff;
    }
`;

const Copyright = styled.p`
    color: #777;
    font-size: 0.8rem;
`;

const Footer: React.FC = () => {
    return (
        <FooterContainer>
            <FooterLinks>
                <FooterLink href="https://github.com/gbburleigh" target="_blank" rel="noopener noreferrer">GitHub</FooterLink>
                <FooterLink href="https://www.linkedin.com/in/gbburleigh" target="_blank" rel="noopener noreferrer">LinkedIn</FooterLink>
                <FooterLink href="mailto:your.email@example.com">Email</FooterLink>
                {/* Add more links as needed */}
            </FooterLinks>
            <Copyright>&copy; {new Date().getFullYear()} Your Name</Copyright>
        </FooterContainer>
    );
};

export default Footer;