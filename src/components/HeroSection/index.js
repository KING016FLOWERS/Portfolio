import React from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop, Title, Span, SubTitle, ResumeButton, IconContainer } from './HeroStyle'
import HeroImg from '../../images/HeroImage.jpg'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import { FaCloudDownloadAlt } from "react-icons/fa";
import { BsGithub, BsLinkedin } from 'react-icons/bs';
import { SiLeetcode } from 'react-icons/si';


const HeroSection = () => {
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <Title>Hi, I am <br /> {Bio.name}</Title>
                        <TextLoop>
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        
                        <IconContainer>
                            <a
                                href={Bio.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:scale-125 duration-300"
                            data-tooltip="GitHub"
                            >
                                <BsGithub size={40} />
                            </a>
                            <a
                                href={Bio.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:scale-125 duration-300"
                                data-tooltip="LinkedIn"

                            >
                                <BsLinkedin size={40} />
                            </a>
                            <a
                                href={Bio.leetcode}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="transition-all hover:scale-125 duration-300"
                                data-tooltip="Leetcode"

                            >
                                <SiLeetcode size={40} />
                            </a>
                        </IconContainer>

                        <ResumeButton href={Bio.resume} target="display" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
                            Resume <FaCloudDownloadAlt size={24} />
                            
                        </ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">
                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
        </div>
    )
}

export default HeroSection;
