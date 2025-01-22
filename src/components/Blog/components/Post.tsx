import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import blogPosts from '../../../assets/posts.json';

const FullPostContainer = styled.div`
    width: 80%;
    margin: 2rem auto;
    background-color: #222;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);

    @media (max-width: 768px) {
        width: 95%;
    }
`;

const FullPostImage = styled.img`
    width: 100%;
    max-height: 500px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 2rem;
`;

const FullPostTitle = styled.h1`
    color: #fff;
    margin-bottom: 1rem;
`;

const FullPostContent = styled.p`
    color: #eee;
    white-space: pre-wrap;
    line-height: 1.6;
`;

const FullPost: React.FC = () => {
    const { postId } = useParams();

    if (!postId) {
        return <FullPostContainer>Error: No Post ID provided</FullPostContainer>
    }

    const post = blogPosts.find((p) => p.id === postId);

    if (!post) {
        return <FullPostContainer>Post not found</FullPostContainer>;
    }

    return (
        <FullPostContainer>
            <FullPostImage src={post.image} alt={post.title} />
            <FullPostTitle>{post.title}</FullPostTitle>
            <FullPostContent>{post.content}</FullPostContent>
        </FullPostContainer>
    );
};

export default FullPost;