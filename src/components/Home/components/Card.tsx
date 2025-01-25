import React from 'react';
import styled from 'styled-components';

import {
    FaReact,
    FaJsSquare,
    FaCss3Alt,
    FaNodeJs,
    FaDatabase,
    FaCode,
    FaHtml5,
    FaAws,
    FaDocker,
    FaPython,
    FaTerminal,
    FaVuejs,
    FaFlask,
    FaLock,
    FaWrench,
    FaGlobe,
} from 'react-icons/fa'; // Import icons
import { SiTypescript, SiNextdotjs, SiDatadog, SiJira, SiBitbucket, SiPuppeteer, SiJest } from "react-icons/si"
import { FaGears, FaGithub, FaGolang, FaSackDollar } from 'react-icons/fa6';
import ProgressBar from './ProgressBar';
import { BiLoader } from 'react-icons/bi';

const CardContainer = styled.div`
    background-color: #111;
    border-radius: 12px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    padding: 2rem;
    margin-bottom: 2rem;
    overflow: hidden;
    display: flex; /* Use flexbox for columns */
    gap: 2rem;
    align-items: center; /* Align items to the top */
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        align-content: center;
        text-align: center;
    }
`;

const CardColumn = styled.div`
    flex: 1 1 47%; /* Adjust width as needed */
    min-width: 250px;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        align-content: center;
        text-align: center;
        width: 85%;
    }
`;

const CardImage = styled.img`
    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
    margin-top: 0;
    margin-bottom: 0.5rem;
    color: #fff;
    display: flex; /* Use flexbox for title and logo */
    align-items: center; /* Vertically align title and logo */
    gap: 1rem; /* Space between title and logo */

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: center;
        align-content: center;
        text-align: center;
    }
    
`;

const CompanyLogoImg = styled.img`
    height: 3rem; /* Adjust logo height as needed */
    width: auto;
    max-width: 100px;
    background: #fff;
    padding: 8px;
    border-radius: 4px;
`;

const CardDescription = styled.p`
    color: #eee;
    margin-bottom: 1rem;
`;

const CardButton = styled.a`
  display: inline-block;
  padding: 0.75rem 1.5rem;
  background-color: #fff;
  color: #000;
  text-decoration: none;
  border-radius: 8px;
  font-weight: bold;
  transition: background-color 0.2s, color 0.2s;
  border: 2px solid #fff;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

  &:hover {
    background-color: #000;
    color: #fff;
    border-color: #fff;
  }
`;

const ColumnDivider = styled.div`
    width: 2px; /* Adjust thickness as needed */
    background-color: #333; /* Adjust color as needed */
    margin: 0 1rem; /* Adjust margin as needed */
    align-self: stretch; /* Make divider stretch to full column height */
    @media (max-width: 768px) {
        display: none;
    }
`;

const LargeImageContainer = styled.div`
    width: 100%;
    max-height: 400px; /* Adjust as needed */
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3); /* More pronounced shadow */
    transition: transform 0.3s ease-in-out;
    margin-bottom: 1rem;

    &:hover {
        transform: scale(1.03); /* Subtle scale on hover */
    }
`;

const LargeImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
    transition: transform 0.5s ease-in-out; /* Slower transition for a smoother effect */

    &:hover {
        transform: scale(1.1);
    }
`;

const TechList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    flex-direction: row; /* Organize into columns */
    flex-wrap: nowrap;
    gap: 1rem;
    @media (max-width: 768px) {
        white-space: pre-line;
        word-break: none;
        text-align: center;
        align-items: center;
        align-content: center;
        justify-content: center;
    }
`;

// const TechColumn = styled.div`
//     display: flex;
//     flex-direction: column;
//     gap: 1rem;
// `;

const TechItem = styled.li`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #ddd;
    font-size: 1.2rem;
    @media (max-width: 768px) {
        font-size: 0.75rem;
        text-align: center;
    }
`;

const TechIcon = styled.span`
    font-size: 1.5rem;
    color: #fff;
`;

interface CardProps {
    title: string;
    description: string;
    image?: string;
    link?: string;
    linkText?: string;
    technologies?: string[]; // Optional technologies prop
    children?: React.ReactNode;
    progress?: number;
    companyLogo?: string;
    contentImage?: string;
}

const Card: React.FC<CardProps> = ({ title, description, image, link, linkText, technologies, children, progress, companyLogo, contentImage }) => {
    const hasTechnologies = technologies && technologies.length > 0;
    const hasContentImage = !!contentImage;

    const technologyColumns = hasTechnologies
    ? technologies.reduce((columns, tech, index) => {
        const columnIndex = Math.floor(index / 3); // Calculate column index
        if (!columns[columnIndex]) {
            columns[columnIndex] = []; // Create new column if it doesn't exist
        }
        columns[columnIndex].push(tech); // Add tech to current column
        return columns;
    }, [] as string[][])
    : [];

    return (
        <CardContainer>
            <CardColumn>
                {image && <CardImage src={image} alt={title} />}
                <CardTitle>
                    {companyLogo && <CompanyLogoImg src={companyLogo} />}
                    {title}
                    {progress === 0 && <BiLoader />}
                </CardTitle>
                <CardDescription>{description}</CardDescription>
                {link && linkText && (
                    <CardButton href={link} target="_blank" rel="noopener noreferrer">
                        {linkText}
                    </CardButton>
                )}
                {children && <div>{children}</div>}
            </CardColumn>
            {(hasTechnologies || hasContentImage) && <ColumnDivider />}
            {hasTechnologies && (
                <CardColumn>
                    <TechList>
                    {technologyColumns.map((column, index) => (
                            <div key={index}>
                                {column.map((tech) => (
                                    <TechItem key={tech}>
                                        <TechIcon>
                                    {tech === "React" && <FaReact />}
                                    {tech === "Python" && <FaPython />}
                                    {tech === "JavaScript" && <FaJsSquare />}
                                    {tech === "CSS" && <FaCss3Alt />}
                                    {tech === "Node.js" && <FaNodeJs />}
                                    {tech === "SQL" && <FaDatabase />}
                                    {tech === "TypeScript" && <SiTypescript />}
                                    {tech === "Next.js" && <SiNextdotjs />}
                                    {tech === "HTML" && <FaHtml5 />}
                                    {tech === "Golang" && <FaGolang />}
                                    {tech === "AWS" && <FaAws />}
                                    {tech === "Docker" && <FaDocker />}
                                    {tech === "Bash" && <FaTerminal />}
                                    {tech === "Datadog" && <SiDatadog />}
                                    {tech === "Vue.js" && <FaVuejs />}
                                    {tech === "Jira" && <SiJira />}
                                    {tech === "Bitbucket" && <SiBitbucket />}
                                    {tech === "GitHub" && <FaGithub />}
                                    {tech === "Puppeteer" && <SiPuppeteer />}
                                    {tech === "Analytics" && <FaFlask />}
                                    {tech === "Payments" && <FaSackDollar />}
                                    {tech === "Security" && <FaLock />}
                                    {tech === "DevOps" && <FaGears />}
                                    {tech === "Util" && <FaWrench />}
                                    {tech === "Web" && <FaGlobe />}
                                    {tech === "Jest" && <SiJest />}
                                    {tech === "Testing" && <FaCode />}
                                    </TechIcon>
                                        {
                                            ["Analytics", "Payments", "Security", "DevOps", "Util", "Web", "Testing"].includes(tech) ?
                                            <p style={{fontWeight: 'bold'}}>{tech}</p> :
                                            <p style={{fontWeight: 'lighter'}}>{tech}</p>
                                        }
                                    </TechItem>
                                ))}
                            </div>
                        ))}
                    </TechList>
                    {progress != undefined && progress >= 0 && (<ProgressBar progress={progress} />)}
                </CardColumn>
            )}
            {hasContentImage && (
                <CardColumn>
                    <LargeImageContainer>
                        <LargeImage src={contentImage}/>
                    </LargeImageContainer>
                </CardColumn>
            )}
        </CardContainer>
    );
};

export default Card;
