import React from 'react';
import styled from 'styled-components';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import CertificationCard from '../Cards/Certificationcard';
import { certifications } from '../../data/constants';

const Container = styled.div`
   display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 1;
    align-items: center;
    padding: 0px 0px 60px 0px;
    @media (max-width: 960px) {
        padding: 0px;
    }
`;

const Wrapper = styled.div`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    width: 100%;
    max-width: 1350px;
    padding: 40px 0px 0px 0px;
    gap: 12px;
    @media (max-width: 960px) {
        flex-direction: column;
    }
`;

const Title = styled.div`
    font-size: 42px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    text-align: center;
    margin-bottom: 20px;
    @media (max-width: 768px) {
        font-size: 32px;
    }
`;

const Desc = styled.div`
    font-size: 18px;
    color: ${({ theme }) => theme.text_secondary};
    text-align: center;
    max-width: 800px;
    margin-bottom: 30px;
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const TimelineSection = styled.div`
    width: 100%;
    max-width: 1000px;
    margin-top: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 12px;
    @media (max-width: 660px) {
        align-items: end;
    }
`;

const Certification = () => {
    return (
        <Container id="certifications">
            <Wrapper>
                <Title>Certifications</Title>
                <Desc>
                A showcase of certifications I have earned to develop my skills and grow professionally.
                </Desc>
                <TimelineSection>
                    <Timeline>
                        {certifications.map((cert, index) => (
                            <TimelineItem key={index}>
                                <TimelineSeparator>
                                    <TimelineDot variant="outlined" color="secondary" />
                                    {index !== certifications.length && (
                                        <TimelineConnector style={{ background: '#854CE6' }} />
                                    )}
                                </TimelineSeparator>
                                <TimelineContent>
                                    <CertificationCard certification={cert} />
                                </TimelineContent>
                            </TimelineItem>
                        ))}
                    </Timeline>
                </TimelineSection>
            </Wrapper>
        </Container>
    );
};

export default Certification;
