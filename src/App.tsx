import React, { useEffect, useRef, useState } from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';
import Card from './components/Card';
import Footer from './components/Footer';
import staxLogo from './assets/stax_logo.png';
import cardxLogo from './assets/cardx-logo.png';
import northwesternLogo from './assets/northwestern-university.svg';
import family from './assets/family.jpg';
import conference from './assets/conference.jpg';
import theatre from './assets/theatre.jpg';
import city from './assets/city.jpg';
import michigan from './assets/michigan.jpg';
import view from './assets/view.jpg';
import art from './assets/art.jpg';
import bar from './assets/bar.jpg';
import bucky from './assets/bucky.png';
import cat1 from './assets/cat1.jpg';
import cat2 from './assets/cat2.jpg';
import dinner from './assets/dinner.jpg';
import itay from './assets/itay.jpg';
import newyork from './assets/newyork.jpg';
import orlando from './assets/orlando.jpg';
import sphinx from './assets/sphinx.jpg';
import suits from './assets/suits.jpg';
import training from './assets/training.jpg';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #000;
    color: #fff;
    font-family: sans-serif;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    /* Gradient background */
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(255, 255, 255, 0.05) 20vh, rgba(255, 255, 255, 0.1) 50vh, rgba(255, 255, 255, 0.05) 80vh, rgba(0,0,0,0));
    background-repeat: no-repeat;
  }

  * {
    box-sizing: border-box;
  }
`;

import '@fontsource/inter'; // Import the Inter font
import '@fontsource/fira-code'; // Import the Fira Code font

export const StylishParagraph = styled.p`
  font-size: 1.15rem; /* Slightly increased font size */
  line-height: 1.7; /* Further improved line height */
  color: #ddd; /* Slightly lighter gray for better contrast */
  margin-bottom: 2rem; /* Increased bottom margin */
  text-rendering: optimizeLegibility;
  hyphens: auto;
  word-wrap: break-word;
  font-family: 'Inter', sans-serif; /* Use Inter font */
  letter-spacing: 0.02em; /* Subtle letter spacing */
  text-shadow: 0.5px 0.5px 1px rgba(0, 0, 0, 0.1); /* Subtle text shadow */
`;

const CodeSnippet = styled.code`
    font-family: 'Fira Code', monospace;
    background-color: #222;
    padding: 0.2rem 0.4rem;
    border-radius: 4px;
    font-size: 0.9rem;
    color: #9cdcfe;
`

const StylishList = styled.ul`
    list-style-type: disc; /* Use disc bullets */
    padding-left: 2rem;
    margin-bottom: 1.5rem;
`

const StylishListItem = styled.li`
    margin-bottom: 0.75rem;
    color: #ddd;
    font-size: 1.15rem;
    line-height: 1.7;
    font-family: 'Inter', sans-serif;
`

// Example of importing a font
import '@fontsource/roboto'; // Defaults to weight 400 with normal style.
import Bio from './components/Bio';
import Nav from './components/Nav';
import Downloader from './components/Downloader';
import Gallery from './components/Gallery';

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
`;

const Name = styled.h1`
    font-size: 4rem; /* Very large font size */
    font-weight: 900; /* Extra bold */
    margin-bottom: 1rem;
    letter-spacing: 2px; /* Slight letter spacing */
    text-transform: uppercase;
    text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
`;

const Title = styled.p`
    font-size: 2rem; /* Large font size */
    font-weight: 700; /* Bold */
    color: #eee; /* Slightly lighter text */
    letter-spacing: 1px;
`;

const App: React.FC = () => {
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
      handleScroll(); // Initial check on mount

      return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <>
          <GlobalStyle />
          <Nav/>
          <BoldHeader>
                <Name>Graham Burleigh</Name>
                <Title>Developing Anything</Title>
            </BoldHeader>
            <Divider />
          <Main>
              <AnimatedSection id="about" ref={(el) => sectionRefs.current[0] = el} className={visibleSections[0] ? 'visible' : ''}>
                  <SectionTitle>About Me</SectionTitle>
                  {/* <ProfileImage src={profileImage} alt="Your Profile" /> */}
                  <Bio />
              </AnimatedSection>
              <Divider />
              
              <AnimatedSection id="projects" ref={(el) => sectionRefs.current[1] = el} className={visibleSections[1] ? 'visible' : ''}>
                  <SectionTitle>Work</SectionTitle>
                  <Card
                      title="Stax Payments"
                      description="Stax Payments is a fintech company that provides a secure and easy-to-use payment processing solution for businesses of all sizes."
                      link="https://example.com/project1"
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
                      link="https://example.com/project1"
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
                      link="https://example.com/project1"
                      linkText="Northwestern University"
                      technologies={[
                        "Python",
                        "JavaScript",
                        "SQL",
                        "Docker",
                        "Puppeteer",
                        "GitHub",
                        "Analytics",
                        "Security",
                        "Web"
                      ]}
                      companyLogo={northwesternLogo}
                  />
              </AnimatedSection>
              <Divider />

              <AnimatedSection id="projects" ref={(el) => sectionRefs.current[2] = el} className={visibleSections[1] ? 'visible' : ''}>
                  <SectionTitle>Projects</SectionTitle>
                  <StylishParagraph>I'm currently learning Golang and keeping my Python skills sharp. Most of my projects are research-focused with an emphasis on exploring new fields. I always like learning about different verticals within the industry!</StylishParagraph>
                  <Card
                      title="quick-seeders"
                      description="Go implementation of a secure tokenization system, safeguarding cardholder information with modern cryptographic techniques."
                      link="https://example.com/project1"
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
                      progress={0}
                  />
                  <Card
                      title="quick-logger"
                      description="Go implementation of a secure tokenization system, safeguarding cardholder information with modern cryptographic techniques."
                      link="https://example.com/project1"
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
                        "DataDog"
                      ]}
                  />
                  <Card
                      title="quick-gateway"
                      description="Go implementation of a secure tokenization system, safeguarding cardholder information with modern cryptographic techniques."
                      link="https://example.com/project1"
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
                      title="quick-card-tokenizer"
                      description="Go implementation of a secure tokenization system, safeguarding cardholder information with modern cryptographic techniques."
                      link="https://example.com/project1"
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
                      description="Go implementation of a secure tokenization system, safeguarding cardholder information with modern cryptographic techniques."
                      link="https://example.com/project1"
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
                      title="quick-tools/quick-gha"
                      description="Go implementation of a secure tokenization system, safeguarding cardholder information with modern cryptographic techniques."
                      link="https://example.com/project1"
                      linkText="View Project"
                      progress={10}
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
              <AnimatedSection id="life" ref={(el) => sectionRefs.current[3] = el} className={visibleSections[2] ? 'visible' : ''}>
                  <SectionTitle>Life</SectionTitle>
                  {/* <Card
                    title="Life Experience 1"
                    description="A brief description of experience 1."
                    contentImage={theatre}
                  />
                  <Card
                    title="Life Experience 1"
                    description="A brief description of experience 1."
                    contentImage={conference}
                  />
                  <Card
                    title="Life Experience 1"
                    description="A brief description of experience 1."
                    contentImage={family}
                  /> */}
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
              <AnimatedSection id="contact" ref={(el) => sectionRefs.current[4] = el} className={visibleSections[3] ? 'visible' : ''}>
                  <SectionTitle>Contact</SectionTitle>
                  <StylishParagraph>I'd love to hear from you! Whether you have a project in mind, want to discuss web development, or just want to say hello, please don't hesitate to get in touch. I'm available via email at <strong>grahamburleigh6@gmail.com</strong> and you can also find me on <strong>LinkedIn</strong> or <strong>GitHub</strong>. I look forward to connecting!</StylishParagraph>
                  <Downloader filename="Resume.pdf" filetype="PDF" href={'../public/Resume.pdf'}/>
              </AnimatedSection>
          </Main>
          <Footer />
      </>
  );
};

export default App;