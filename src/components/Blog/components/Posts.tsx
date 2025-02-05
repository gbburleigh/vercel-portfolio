import React from 'react';
import styled from 'styled-components';
import posts from '../../../assets/posts.json';

interface BlogPost {
    title: string;
    image: string;
    link: string;
    content: string;
}

const blogPosts: BlogPost[] = posts;


const BlogPostsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;
    width: 90%;
    margin: 2rem auto;

    @media (max-width: 768px) {
        width: 95%;
    }
`;

const BlogPostCard = styled.div`
    background-color: #222;
    border-radius: 8px;
    padding: 2rem;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
    overflow: hidden;
    transition: transform 0.2s;

    &:hover {
        transform: translateY(-5px);
    }
`;

const BlogPostImage = styled.img`
    width: 100%;
    max-height: 300px;
    object-fit: cover;
    border-radius: 8px;
    margin-bottom: 1rem;
`;

const BlogPostTitle = styled.h2`
    color: #fff;
    margin-bottom: 0.5rem;
`;

const BlogPostContent = styled.p`
    color: #eee;
    margin-bottom: 1rem;
`;

const BlogPostLink = styled.a`
    display: inline-block;
    padding: 0.5rem 1rem;
    background-color: #fff;
    color: #000;
    text-decoration: none;
    border-radius: 4px;
    transition: background-color 0.3s, color 0.3s;

    &:hover {
        background-color: #ddd;
        color: #000;
    }
`;

const Posts: React.FC = () => {
    return (
        <BlogPostsContainer>
            {blogPosts.map((post, index) => {
                const content = post.content.length > 100 ? post.content.substring(0, 250) + '...' : post.content;
                return (
                    <BlogPostCard key={index}>
                        <BlogPostImage src={post.image} alt={post.title} />
                        <BlogPostTitle>{post.title}</BlogPostTitle>
                        <BlogPostContent>{content}</BlogPostContent>
                        <BlogPostLink href={post.link} target="_blank" rel="noopener noreferrer">Read More</BlogPostLink>
                    </BlogPostCard>
                )
            })}
        </BlogPostsContainer>
    )
};

export default Posts;