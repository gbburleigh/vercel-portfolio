import React from 'react';
import styled from 'styled-components';
import Posts from './components/Posts';

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
            <BlogTitle>gb.blog</BlogTitle>
            <Posts/>
        </BlogPage>
    );
};

export default Blog;