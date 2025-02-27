import React from 'react'
import styled from 'styled-components'
import { FaFileAlt } from 'react-icons/fa';

const DocumentButton = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30%;
    padding: 8px 12px;
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
    color: white;
    font-size: 14px;
    font-weight: 500;
    border-radius: 7px;
    text-align: center;
    text-decoration: none;
    transition: background-color 0.3s ease;
    &:hover {
    background: linear-gradient(225deg, hsla(294, 100%, 50%, 1) 0%, hsla(271, 100%, 50%, 1) 100%);
    }
    margin: 0 auto;
    gap: 8px;
    @media only screen and (max-width: 768px){
        width: 70%;
        font-size: 12px;
        padding: 6px 10px;
    }
`

const Description = styled.div`
    width: 100%;
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    margin-bottom: 10px;
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Span = styled.span`
overflow: hidden;
display: -webkit-box;
max-width: 100%;
-webkit-box-orient: vertical;
text-overflow: ellipsis;
`

const Card = styled.div`
    width: 650px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0,0,0,0.1);
    padding: 12px 16px;
    justify-content: space-between;
    position: relative;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    gap: 12px;
    transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0 0 4px 2px gray;
        transform: translateY(-5px);
    }
    @media only screen and (max-width: 768px){
        padding: 10px;
        gap: 8px;
        width: 300px;
    }
    border: 0.1px solid #306EE8;
    box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
`

const Top = styled.div`
    width: 100%;
    display: flex;
    gap: 12px
`

const Image = styled.img`
    height: 50px;
    background-color: #000;
    border-radius: 10px;
    margin-top: 4px;
    @media only screen and (max-width: 768px){
        height: 40px;
    }
`

const Body = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column; 
`

const Role = styled.div`
    font-size: 18px;
    font-weight: 600;
    color: ${({ theme }) => theme.text_primary};
    @media only screen and (max-width: 768px){
        font-size: 14px;
    }
`

const Company = styled.div`
    font-size: 14px;
    font-weight: 500;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const Date = styled.div`
    font-size: 12px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_secondary};
    @media only screen and (max-width: 768px){
        font-size: 10px;
    }
`

const Skills = styled.div`
    width: 100%;
    display: flex;
    gap: 12px;
    margin-top: -10px;
`

const ItemWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
`

const Skill = styled.div`
    font-size: 15px;
    font-weight: 400;
    color: ${({ theme }) => theme.text_primary + 99};
    @media only screen and (max-width: 768px){
        font-size: 12px;
    }
`

const ExperienceCard = ({ experience }) => {
    return (
        <Card>
            <Top>
                <Image src={experience.img} />
                <Body>
                    <Role>{experience.role}</Role>
                    <Company>{experience.company}</Company>
                    <Date>{experience.date}</Date>
                </Body>
            </Top>
            <Description>
                {experience?.desc &&
                    <Span>{experience?.desc}</Span>
                }
                {experience?.skills &&
                    <>
                        <br />
                        <Skills>
                            <b>Tools:</b>
                            <ItemWrapper>
                                {experience?.skills?.map((skill, index) => (
                                    <Skill key={index}>• {skill}</Skill>
                                ))}
                            </ItemWrapper>
                        </Skills>
                    </>
                }
            </Description>
            {experience.doc &&
                <DocumentButton href={experience.doc} target="_blank">
                    <FaFileAlt /> View Document
                </DocumentButton>
            }
        </Card>
    )
}

export default ExperienceCard
