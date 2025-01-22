import styled from "styled-components";

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
  @media (max-width: 768px) {
    white-space: pre-line;
    word-break: break-all;
    word-wrap: break-word;
  }
`;