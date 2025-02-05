import React from 'react';
import styled from 'styled-components';
import profileImage from '../../../assets/profile.jpg'; // Import your image
import { StylishParagraph } from '../../shared/StylishParagraph';

const AboutMeContainer = styled.div`
  display: flex;
  flex-wrap: wrap; /* Allows content to wrap on smaller screens */
  gap: 1rem; /* Space between columns */
  align-items: center; /* Vertically align content */
  padding: 8px;
`;

const AboutMeColumn = styled.div`
  display: flex;
  flex: 1 1 40%; /* Each column takes up 45% of the available space, with some flex-grow/shrink */
  min-width: 300px; /* Minimum width for each column */
  justify-content: center;
`;

const ProfileImage = styled.img`
  width: 100%;
  max-width: 400px;
  height: auto;
  border-radius: 8px;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
`;

const Bio: React.FC = () => {
    return (
        <AboutMeContainer>
            <AboutMeColumn>
                <StylishParagraph>
                I'm a passionate and driven web developer with a keen eye for detail and a love for creating clean, user-friendly, and performant software. I thrive on tackling challenging projects and am constantly seeking opportunities to expand my skillset and stay up-to-date with the latest technologies. My focus is on fullstack development using modern frameworks like React and TypeScript, and I'm always eager to collaborate and contribute to innovative projects. Currently I'm learning about AI and DevOps - focusing on AWS infrastructure and open-source libraries like Pytorch, CV, and Langchain. Let's talk software, payments, industry, or anything career-oriented!                </StylishParagraph>
            </AboutMeColumn>
            <AboutMeColumn>
                <ProfileImage src={profileImage} alt="Your Profile" />
            </AboutMeColumn>
        </AboutMeContainer>
    );
};

export default Bio;