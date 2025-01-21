import React from 'react';
import styled from 'styled-components';

// ... other imports and styles

const NavContainer = styled.nav`
    position: sticky;
    top: 0;
    z-index: 100; /* Ensure nav stays on top */
    background-color: #000;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        padding: 1rem 0;
    }
`;

const NavLinks = styled.div`
    display: flex;
    gap: 2rem;
`;

const NavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 2px solid transparent;

    &:hover {
        color: #000;
        background-color: #fff;
        border-color: #fff;
    }
`;

const ExternalNavLink = styled.a`
    color: #fff;
    text-decoration: none;
    font-weight: 600;
    transition: color 0.3s;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    border: 2px solid transparent;

    &:hover {
        color: #000;
        background-color: #fff;
        border-color: #fff;
    }
`

const Nav: React.FC = () => {
    return (
        <NavContainer>
            <NavLinks>
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#life">Life</NavLink>
                <NavLink href="#contact">Contact</NavLink>
            </NavLinks>
            <NavLinks>
                <ExternalNavLink href="https://github.com/gbburleigh" target="_blank" rel="noopener noreferrer">GitHub</ExternalNavLink>
                <ExternalNavLink href="https://www.linkedin.com/in/gbburleigh" target="_blank" rel="noopener noreferrer">LinkedIn</ExternalNavLink>
            </NavLinks>
        </NavContainer>
    );
};

export default Nav;