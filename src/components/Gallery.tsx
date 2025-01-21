import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';

interface GalleryProps {
    images: string[];
}

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

const zoomIn = keyframes`
    from {
        transform: scale(0.5);
        opacity: 0;
    }
    to {
        transform: scale(1);
        opacity: 1;
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
    }
    to {
        opacity: 0;
    }
`;

const ModalOverlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1001;
    opacity: 0;
    animation: ${fadeIn} 0.3s forwards;
    &.closing {
        animation: ${fadeOut} 0.5s forwards;
    }
`;

const ModalImage = styled.img`
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    transform: scale(0.5);
    opacity: 0;
    animation: ${zoomIn} 0.3s forwards;
    &.closing {
        animation: ${fadeOut} 0.5s forwards;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: #ddd;
    }
`;

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

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalImage, setModalImage] = useState<string | null>(null);
    const [isClosing, setIsClosing] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        if (isModalOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isModalOpen]);

    const openModal = (image: string) => {
        setModalImage(image);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsClosing(true); // Start closing animation
        setTimeout(() => { // After the animation is complete
            setModalImage(null);
            setIsModalOpen(false);
            setIsClosing(false); // Reset closing state
        }, 300); // Match animation duration
    };

    return (
        <>
            <GalleryContainer>
                {images.map((image, index) => (
                    <GalleryImageContainer key={index} onClick={() => openModal(image)}>
                        <GalleryImage src={image}/>
                    </GalleryImageContainer>
                ))}
            </GalleryContainer>

            {isModalOpen && modalImage && (
                <ModalOverlay onClick={closeModal} className={isClosing ? 'closing' : ''}>
                    <ModalImage src={modalImage} onClick={(e) => e.stopPropagation()} className={isClosing ? 'closing' : ''}/>
                    <CloseButton onClick={closeModal}>&times;</CloseButton>
                </ModalOverlay>
            )}
        </>
    );
};

export default Gallery;