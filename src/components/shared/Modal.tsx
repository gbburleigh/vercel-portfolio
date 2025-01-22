import React, { useState, useEffect, useRef, ReactNode } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaTimes } from 'react-icons/fa';

const fadeIn = keyframes`
    from {
        opacity: 0;
    }
    to {
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
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.9);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 10000;
    animation: ${fadeIn} 0.3s forwards;
    &.closing {
        animation: ${fadeOut} 0.3s forwards;
    }
`;

const ModalContent = styled.div`
    background-color: #111;
    border-radius: 8px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);
    max-height: 90vh;
    max-width: 80vw;
    overflow-y: auto;
    padding: 2rem;
    position: relative;
`;

const CloseButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background: none;
    border: none;
    color: white;
    font-size: 2rem;
    cursor: pointer;
    transition: color 0.3s;
    z-index: 1;

    &:hover {
        color: #ddd;
    }
`;

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
    const [isClosing, setIsClosing] = useState(false);
    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleOutsideClick = (event: MouseEvent) => {
            if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
                closeModal();
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleOutsideClick);
        } else {
            document.removeEventListener('mousedown', handleOutsideClick);
        }

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick);
        };
    }, [isOpen]);

    const closeModal = () => {
        setIsClosing(true);
        setTimeout(() => {
            onClose();
            setIsClosing(false);
        }, 300);
    };

    if (!isOpen) {
        return null;
    }

    return (
        <>
            <ModalOverlay className={isClosing ? 'closing' : ''}>
                <ModalContent ref={modalRef} onClick={(e) => e.stopPropagation()} className={isClosing ? 'closing' : ''}>
                    {children}
                    <CloseButton onClick={closeModal}>
                        <FaTimes />
                    </CloseButton>
                </ModalContent>
            </ModalOverlay>
        </>
    );
};

export default Modal;
