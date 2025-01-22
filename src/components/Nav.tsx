import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import styled from 'styled-components';

// ... other imports and styles

const NavParent = styled.nav`
    position: sticky;
    top: 0;
    z-index: 100;
    background-color: #000;
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    flex-wrap: wrap;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        padding: 1rem;
    }
`;

const NavContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;

    @media (min-width: 769px) {
        display: block;
    }
`;

const NavLinks = styled.div<{ isOpen: boolean }>`
    display: flex;
    gap: 2rem;

    @media (max-width: 768px) {
        flex-direction: column;
        width: 100%;
        margin-top: 1rem;
        display: ${({ isOpen }) => (isOpen ? 'flex' : 'none')}; /* Conditionally show/hide */
    }
`;

const HamburgerIcon = styled.button`
    background: none;
    border: none;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    padding: 0;

    @media (min-width: 769px) {
        display: none; /* Hide on larger screens */
    }
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
    const [isNavOpen, setIsNavOpen] = useState(false); // State for nav open/close

    const toggleNav = () => {
        setIsNavOpen(!isNavOpen);
    };
    
    return (
        <NavParent>
            <NavContainer>
                <HamburgerIcon onClick={toggleNav}>
                    {isNavOpen ? <FaTimes /> : <FaBars />} {/* Toggle icons */}
                </HamburgerIcon>
            </NavContainer>
            <NavLinks isOpen={isNavOpen}> {/* Pass isOpen prop */}
                <NavLink href="#about">About</NavLink>
                <NavLink href="#projects">Projects</NavLink>
                <NavLink href="#life">Life</NavLink>
                <NavLink href="#contact">Contact</NavLink>
                <ExternalNavLink href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</ExternalNavLink>
                <ExternalNavLink href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</ExternalNavLink>
            </NavLinks>
        </NavParent>
    );
};

export default Nav;