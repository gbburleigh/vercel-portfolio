import styled from 'styled-components';

const ProgressBarContainer = styled.div`
    width: 100%;
    height: 10px;
    background-color: #333;
    border-radius: 5px;
    overflow: hidden;
    margin-top: 1rem;
`;

type ProgressBarProps = { 
    progress: number 
};

const ProgressBarFill = styled.div<{ progress: number }>`
    height: 100%;
    background-color: #fff;
    width: ${props => props.progress}%;
    border-radius: 5px;
    transition: width 0.3s ease;
`;

const ProgressBar: React.FC<ProgressBarProps> = (props) => {
    return (
        <ProgressBarContainer>
            <ProgressBarFill progress={props.progress} />
        </ProgressBarContainer>
    )
};

export default ProgressBar;