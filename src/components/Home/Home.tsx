import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import Card from './components/Card';
import Footer from './components/Footer';
import Bio from './components/Bio';
import Downloader from './components/Downloader';
import Gallery from './components/Gallery';
import { StylishParagraph } from '../shared/StylishParagraph';

import staxLogo from '../../assets/stax_logo.png';
import cardxLogo from '../../assets/cardx-logo.png';
import northwesternLogo from '../../assets/northwestern-university.svg';
import family from '../../assets/family.jpg';
import conference from '../../assets/conference.jpg';
import theatre from '../../assets/theatre.jpg';
// import city from '../../assets/city.jpg';
import michigan from '../../assets/michigan.jpg';
// import view from '../../assets/view.jpg';
// import art from '../../assets/art.jpg';
import bar from '../../assets/bar.jpg';
import bucky from '../../assets/bucky.png';
// import cat1 from '../../assets/cat1.jpg';
import cat2 from '../../assets/cat2.jpg';
import dinner from '../../assets/dinner.jpg';
// import itay from '../../assets/itay.jpg';
import newyork from '../../assets/newyork.jpg';
import orlando from '../../assets/orlando.jpg';
import sphinx from '../../assets/sphinx.jpg';
// import suits from '../../assets/suits.jpg';
import training from '../../assets/training.jpg';

import '@fontsource/inter';
import '@fontsource/fira-code';
import '@fontsource/roboto';
import { LuLogs } from 'react-icons/lu';
import { BiData } from 'react-icons/bi';
import { GrGateway } from 'react-icons/gr';
import { GiToken } from 'react-icons/gi';
import { BsTools } from 'react-icons/bs';
import { DiGithubBadge } from 'react-icons/di';


const fadeIn = keyframes`
  from {
    opacity: 0;
    filter: blur(10px);
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    filter: blur(0);
    transform: translateY(0);
  }
`;

const Main = styled.main`
  flex-grow: 1; /* Allow main content to expand */
  padding: 0 2rem 2rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
`;

const AnimatedSection = styled.section`
    width: 100%;
    max-width: 100%;
    margin: 2rem auto;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    opacity: 0;
    filter: blur(10px);
    transform: translateY(20px);
    transition: opacity 0.8s ease, filter 0.8s ease, transform 0.8s ease;
    will-change: transform, opacity, filter;

    &.visible {
        animation: ${fadeIn} 0.8s forwards;
    }

    @media (max-width: 768px) {
      padding: 0.5rem;
  }
`

const SectionTitle = styled.h1`
  margin-top: 0;
  margin-bottom: 1rem;
  text-align: center;
`;

const Divider = styled.div`
  width: 80%;
  max-width: 960px;
  height: 2px;
  background: linear-gradient(to right, rgba(255, 255, 255, 0), rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0));
  margin: 2rem auto;
`;

const BoldHeader = styled.header`
    text-align: center;
    padding: 2rem 2rem 0; /* Increased padding */
    margin-bottom: 0 auto;

    @media (max-width: 768px) {
        flex-direction: column;
        align-items: stretch;
        gap: 1rem;
    }
`;

const Name = styled.h1`
    font-size: 4rem; /* Very large font size */
    font-weight: 900; /* Extra bold */
    margin-bottom: 1rem;
    letter-spacing: 2px; /* Slight letter spacing */
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);

    @media (max-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Title = styled.p`
    font-size: 2rem; /* Large font size */
    font-weight: 700; /* Bold */
    color: #eee; /* Slightly lighter text */
    letter-spacing: 1px;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

const Home: React.FC = () => {
    const sectionRefs = useRef<HTMLElement[]>([]);
    const [visibleSections, setVisibleSections] = useState<boolean[]>([]);

    useEffect(() => {
        const handleScroll = () => {
            const windowHeight = window.innerHeight;
            const newVisibleSections = sectionRefs.current.map((section) => {
                if (!section) return false;
                const rect = section.getBoundingClientRect();
                return rect.top <= (windowHeight * .75);
            });
            setVisibleSections(newVisibleSections);
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <BoldHeader>
                <Name>Graham Burleigh</Name>
                <Title>Developing Anything</Title>
            </BoldHeader>
            <Divider />
            <Main>
                <AnimatedSection id="about" ref={(el) => sectionRefs.current[0] = el as HTMLElement } className={visibleSections[0] ? 'visible' : ''}>
                    <SectionTitle>About Me</SectionTitle>
                    {/* <ProfileImage src={profileImage} alt="Your Profile" /> */}
                    <Bio />
                </AnimatedSection>
                <Divider />
              
                <AnimatedSection id="projects" ref={(el) => sectionRefs.current[1] = el as HTMLElement} className={visibleSections[1] ? 'visible' : ''}>
                    <SectionTitle>Work</SectionTitle>
                    <Card
                        title="Stax Payments"
                        description="Stax Payments is a fintech company that provides a secure and easy-to-use payment processing solution for businesses of all sizes."
                        link="https://staxpayments.com/"
                        linkText="Stax Payments"
                        technologies={[
                            "Node.js",
                            "TypeScript",
                            "SQL",
                            "AWS",
                            "React",
                            "Bash",
                            "Datadog",
                            "Jira",
                            "GitHub"
                        ]}
                        companyLogo={staxLogo}
                    />
                    <Card
                        title="CardX"
                        description="CardX is a fintech company that provides a secure and easy-to-use payment processing solution for businesses of all sizes."
                        link="https://cardx.com/"
                        linkText="CardX"
                        technologies={[
                            "Vue.js",
                            "JavaScript",
                            "SQL",
                            "AWS",
                            "Datadog",
                            "Bitbucket",
                            "Jira",
                            "Jest",
                            "Node.js"
                        ]}
                        companyLogo={cardxLogo}
                    />
                    <Card
                        title="Northwestern University"
                        description="Northwestern University is a leading research university in the United States."
                        link="https://www.mccormick.northwestern.edu/"
                        linkText="Northwestern University"
                        technologies={[
                            "Python",
                            "JavaScript",
                            "SQL",
                            "Docker",
                            "Puppeteer",
                            "GitHub",
                            "Analytics",
                            "Web",
                            "Security"
                        ]}
                        companyLogo={northwesternLogo}
                    />
                </AnimatedSection>
              <Divider />

              <AnimatedSection id="projects" ref={(el) => sectionRefs.current[2] = el as HTMLElement} className={visibleSections[1] ? 'visible' : ''}>
                  <SectionTitle>Projects</SectionTitle>
                  <StylishParagraph>I'm currently learning Golang and keeping my Python skills sharp. Most of my projects are research-focused with an emphasis on exploring new fields. I always like learning about different verticals within the industry!</StylishParagraph>
                  <Card
                      title={<>quick-seeders <BiData/></>}
                      description="A fast test data generation tool designed to quickly populate databases for development and testing. Streamlines setup and ensures consistent test environments."
                      link="https://github.com/gbburleigh/quick-seeders"
                      linkText="View Project"
                      technologies={[
                        "Python",
                        "SQL",
                        "Bash",
                        "Testing",
                        "DevOps",
                        "Analytics",
                        "Util"

                      ]}
                      progress={90}
                  />
                  <Card
                      title={<>quick-logger <LuLogs/></>}
                      description="A simple logging service providing efficient log streaming via gRPC. Designed for rapid integration and streamlined debugging in microservice architectures."
                      link="https://github.com/gbburleigh/quick-logger"
                      linkText="View Project"
                      progress={50}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Analytics",
                        "Testing",
                        "DevOps",
                        "Util",
                        "AWS",
                        "Datadog"
                      ]}
                  />
                  <Card
                      title={<>quick-gateway <GrGateway/></>}
                      description="A mock payment gateway service facilitating end-to-end testing of payment flows. Enables developers to simulate various transaction scenarios and responses."
                      link="https://github.com/gbburleigh/quick-gateway"
                      linkText="View Project"
                      progress={50}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Payments",
                        "Security",
                        "DevOps",

                      ]}
                  />
                  <Card
                      title={<>quick-card-tokenizer <GiToken/></>}
                      description="A mock card tokenization service simulating secure token generation over HTTP. Useful for testing payment processing integrations without handling real card data."
                      link="https://github.com/gbburleigh/quick-card-tokenizer"
                      linkText="View Project"
                      technologies={[
                        "Golang",
                        "SQL",
                        "Payments",
                        "Security",
                        "DevOps",
                      ]}
                      progress={75}
                  />
                  <Card
                      title="quick-auth"
                      description="A basic server authentication handler providing simple and effective access control. Implements standard authentication methods for securing APIs and applications."
                      link="https://github.com/gbburleigh/quick-auth"
                      linkText="View Project"
                      progress={0}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Security",
                        "DevOps",
                      ]}
                  />
                  <Card
                      title={<>quick-tools<BsTools/></>}
                      description="A collection of useful scripts, commands, and resources for streamlining common development tasks. Includes utilities for automation, data manipulation, and more."
                      link="https://github.com/gbburleigh/quick-tools"
                      linkText="View Project"
                      progress={40}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Testing",
                        "Util",
                        "Web"
                      ]}
                  />
                  <Card
                      title={<>quick-gha <DiGithubBadge/></>}
                      description="A curated collection of reusable GitHub Actions designed to automate CI/CD workflows. Provides streamlined build, test, and deployment processes for Go projects."
                      link="https://github.com/gbburleigh/quick-gha"
                      linkText="View Project"
                      progress={80}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Testing",
                        "Util",
                        "Web"
                      ]}
                  />
              </AnimatedSection>
              <Divider />
              <AnimatedSection id="life" ref={(el) => sectionRefs.current[3] = el as HTMLElement} className={visibleSections[2] ? 'visible' : ''}>
                  <SectionTitle>Life</SectionTitle>
                  <Gallery images={[
                    theatre, 
                    conference, 
                    family, 
                    // city, 
                    michigan, 
                    // view, 
                    // art, 
                    bar, 
                    bucky, 
                    // cat1, 
                    cat2, 
                    dinner, 
                    // itay, 
                    newyork, 
                    orlando, 
                    sphinx, 
                    // suits, 
                    training
                  ]}/>
              </AnimatedSection>
              <Divider />
              <AnimatedSection id="contact" ref={(el) => sectionRefs.current[4] = el as HTMLElement} className={visibleSections[3] ? 'visible' : ''}>
                  <SectionTitle>Contact</SectionTitle>
                  <StylishParagraph>I'd love to hear from you! Whether you have a project in mind, want to discuss web development, or just want to say hello, please don't hesitate to get in touch. I'm available via email at <strong>grahamburleigh6@gmail.com</strong> and you can also find me on <strong>LinkedIn</strong> or <strong>GitHub</strong>. I look forward to connecting!</StylishParagraph>
                  <Downloader filename="Resume.pdf" filetype="PDF" href={'../public/Resume.pdf'}/>
              </AnimatedSection>
          </Main>
          <Footer />
        </>
    );
};

export default Home;