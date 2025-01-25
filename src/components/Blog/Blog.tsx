import React from 'react';
import styled from 'styled-components';
import Posts from './components/Posts';
import { BiLoader } from 'react-icons/bi';

const BlogPage = styled.div`
    padding: 2rem;
    background-color: #111;
    color: #eee;
    min-height: 80vh;
`;

const BlogTitle = styled.h1`
    color: #fff;
    margin-bottom: 1rem;
    margin-left: 5%;
`;

const Blog: React.FC = () => {
    return (
        <BlogPage>
            <BlogTitle>gb.blog &#127796;</BlogTitle>
            <span style={{marginLeft: '5%', fontSize: '1.5rem', fontWeight: 'lighter'}}>Under Construction! &#129520;</span>
            <Posts/>
        </BlogPage>
    );
};

export default Blog;