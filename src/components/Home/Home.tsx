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
import { GiToken, GiTorch } from 'react-icons/gi';
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
                    <Bio />
                </AnimatedSection>
                <Divider />
              
                <AnimatedSection id="projects" ref={(el) => sectionRefs.current[1] = el as HTMLElement} className={visibleSections[1] ? 'visible' : ''}>
                    <SectionTitle>Work</SectionTitle>
                    <Card
                        title="Stax Payments"
                        description={<><strong>Hand picked as one of three developers to start a risk/underwriting and onboarding focused squad</strong>. Completed several impactful projects still <strong>serving 1000s of merchants daily</strong>, with a focus on scalable infrastructure and successful customer experiences. Extensive experience with <strong>Typescript, SQL optimization, AWS and Datadog.</strong></>}
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
                        description={<><strong>Fullstack development for a surcharging compliant payment processing startup</strong> in Downtown Chicago. Joined a team of 12 developers to build a <strong>merchant-focused payment platform using Vue, Node.js, and PostgreSQL</strong>. Additional skills include <strong>AWS infrastructure development, telemetry through Dataog, and agile methodologies like CI/CD</strong></>}
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
                        description={<>Completed a <strong>Bachelor of Science in CS</strong> at the McCormick School of Engineering. Curriculum focused on <strong>AI/ML, Systems and Security, and Fullstack Web Development</strong>. Performed crucial research involved in publications like <strong style={{fontStyle: 'italic'}}>Decoding the MITRE Engenuity ATT&CK Enterprise Evaluation</strong> and <strong style={{fontStyle: 'italic'}}>Inside the Invisible Cage</strong></>}
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
                      description={<>A <strong>fast test data generation tool</strong> designed to quickly populate databases for development and testing. Streamlines setup and ensures consistent test environments. <br/><br/>Perfect for mocking up different scenarios at scale, with support for varying data types and sizes. Supports Postgres, MySQL, and SQLite, JSON, and CSV.</>}
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
                      description={<>A <strong>compact logging service</strong> providing efficient log streaming via gRPC. Designed for rapid integration and streamlined debugging in microservice architectures. Perfect for quickly and easily handling telemetry for your next Go package.</>}
                      link="https://github.com/gbburleigh/quick-logger"
                      linkText="View Project"
                      progress={50}
                      technologies={[
                        "Golang",
                        "SQL",
                        "AWS",
                        "Datadog",
                        "Analytics",
                        "Testing",
                        "DevOps",
                        "Util",
                        "Networks"
                      ]}
                  />
                  <Card
                      title={<>quick-gateway <GrGateway/></>}
                      description={<>A <strong>mock payment gateway service</strong> facilitating end-to-end testing of payment flows. Enables developers to simulate various transaction scenarios and responses. Test POS terminals, emulate processors, and exchange funds (for research).</>}
                      link="https://github.com/gbburleigh/quick-gateway"
                      linkText="View Project"
                      progress={50}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Payments",
                        "Security",
                        "DevOps",
                        "Research"
                      ]}
                  />
                  <Card
                      title={<>quick-card-tokenizer <GiToken/></>}
                      description={<>A <strong>mock card tokenization service</strong> simulating secure token generation over HTTP. Useful for testing payment processing integrations without handling real card data. <br/><br/>Supports different payment methods like card (not) present and ACH. Uses SQLite to store and associate tokens with payment methods and users.</>}
                      link="https://github.com/gbburleigh/quick-card-tokenizer"
                      linkText="View Project"
                      technologies={[
                        "Golang",
                        "SQL",
                        "Payments",
                        "Security",
                        "DevOps",
                        "Research"
                      ]}
                      progress={75}
                  />
                  <Card
                      title={<>quick-card-reader <GiTorch/></>}
                      description={<><strong>Card reading agent</strong> in Python with a focus on OCR and image processing. Utilizes sklearn and CV2 to read card numbers and expiration dates based off a small corpus of generic training data. <br/><br/>Used for my own personal research into machine learning and computer vision.</>}
                      link="https://github.com/gbburleigh/quick-card-reader"
                      linkText="View Project"
                      progress={30}
                      technologies={[
                        "Python",
                        "AI/ML",
                        "Analytics",
                        "Security",
                        "DevOps",
                        "Research"
                      ]}
                  />
                  <Card
                      title={<>quick-tools<BsTools/></>}
                      description={<>A <strong>collection of useful scripts, commands, and resources</strong> for streamlining common development tasks. Includes utilities for automation, data manipulation, and more. <br/><br/>Serves as a running repository for knowledge, automations, and helpful tidbits I collect along my development.</>}
                      link="https://github.com/gbburleigh/quick-tools"
                      linkText="View Project"
                      progress={40}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Testing",
                        "Util",
                        "Web",
                        "DevOps",
                      ]}
                  />
                  <Card
                      title={<>quick-gha <DiGithubBadge/></>}
                      description={<>A <strong>curated collection of reusable GitHub Actions</strong> designed to automate CI/CD workflows. Provides streamlined build, test, and deployment processes for Go and Node.js projects. <br/><br/>Perfect for automating the start of your nextproject.</>}
                      link="https://github.com/gbburleigh/quick-gha"
                      linkText="View Project"
                      progress={80}
                      technologies={[
                        "Golang",
                        "SQL",
                        "Testing",
                        "Util",
                        "Web",
                        "DevOps",
                        "Cloud"
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