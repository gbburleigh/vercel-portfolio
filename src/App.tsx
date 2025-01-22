import React from 'react';
import { createGlobalStyle } from 'styled-components';
import Nav from './components/Nav';
import Home from './components/Home/Home';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Blog from './components/Blog/Blog';
import FullPost from './components/Blog/components/Post';

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
    min-width: 100vw;
    
    @media (max-width: 768px) {
        align-items: stretch; /* Stretch content to full width on mobile */
    }
  }

  * {
    box-sizing: border-box;
  }
`;

const App: React.FC = () => {
  

  return (
      <Router>
          <GlobalStyle />
          <Nav/>
          <Routes> {/* Define your routes */}
              <Route path="/" element={<Home />} /> {/* Home route */}
              <Route path="/blog" element={<Blog />} /> {/* Blog route */}
              <Route path="/blog/:postId" element={<FullPost/>} /> {/* Full post route */}
          </Routes>
      </Router>
  );
};

export default App;