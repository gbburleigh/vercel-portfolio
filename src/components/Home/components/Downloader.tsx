import React from 'react';
import styled from 'styled-components';
import { FaFileDownload } from 'react-icons/fa';

const DownloadContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: #222;
    padding: 1rem 1.5rem;
    border-radius: 8px;
    cursor: pointer;
    transition: background-color 0.3s, transform 0.2s;
    text-decoration: none;
    color: #eee;
    margin: 1rem auto;
    width: fit-content;

    &:hover {
        background-color: #333;
        transform: scale(1.02);
        color: #fff;
    }
`;

const DownloadIcon = styled.span`
    font-size: 1.5rem;
`;

const DownloadInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const FileName = styled.span`
    font-weight: 600;
`;

const FileType = styled.span`
    font-size: 0.9rem;
    color: #aaa;
`;

interface DownloaderProps {
    filename: string;
    filetype: string;
    href: string;
}

const Downloader: React.FC<DownloaderProps> = ({ filename, filetype, href }) => {

    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = href;
        link.download = filename; // Set the filename for download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <DownloadContainer onClick={handleDownload}>
            <DownloadIcon>
                <FaFileDownload />
            </DownloadIcon>
            <DownloadInfo>
                <FileName>{filename}</FileName>
                <FileType>{filetype}</FileType>
            </DownloadInfo>
        </DownloadContainer>
    );
};

export default Downloader;