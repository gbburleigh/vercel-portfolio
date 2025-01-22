import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../../shared/Modal';

interface GalleryProps {
    images: string[];
}

const GalleryContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding: 1rem;
    border-radius: 8px;
    background-color: #111;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.3);
    overflow: hidden;

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 480px) {
        grid-template-columns: 1fr;
    }
`;

const GalleryImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    border-radius: 8px;
    box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
    transition: transform 0.3s ease-in-out;
    padding-bottom: 100%; /* Maintain square aspect ratio */

    &:hover {
        transform: scale(1.05);
    }
`;

const GalleryImage = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease-in-out;

    &:hover {
        transform: scale(1.1);
    }
`;

const ModalImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    object-fit: contain; /* Prevent image from being cropped */
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
`;

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    return (
        <>
            <GalleryContainer>
                {images.map((image, index) => (
                    <>
                        <GalleryImageContainer key={index} onClick={() => {
                            setIsModalOpen(true);
                            setSelectedImage(image);
                        }}>
                        <GalleryImage src={image}/>
                        </GalleryImageContainer>
                        <Modal
                            isOpen={isModalOpen}
                            onClose={() => setIsModalOpen(false)}
                        >
                            <ModalImage src={selectedImage as string}/>
                        </Modal>
                    </>
                ))}
            </GalleryContainer>    
        </>
    );
};

export default Gallery;