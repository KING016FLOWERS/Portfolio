import React from 'react';
import styled from 'styled-components';
import { FiExternalLink } from 'react-icons/fi'; // Import an open icon from react-icons

const Container = styled.div`
   width: 650px;
   border-radius: 10px;
   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
   padding: 12px 16px;
   justify-content: space-between;
   position: relative;
   overflow: hidden;
   display: flex;
   flex-direction: column;
   gap: 12px;
   transition: all 0.3s ease-in-out;

   &:hover {
      box-shadow: 0 0 4px 2px gray;
      transform: translateY(-5px);
   }

   @media only screen and (max-width: 768px) {
      padding: 10px;
      gap: 8px;
      width: 300px;
   }

   border: 0.1px solid #854CE6;
`;

const Header = styled.div`
   display: flex;
   gap: 14px;
   width: 100%;
   align-items: center;
`;

const Logo = styled.img`
   height: 60px;
   border-radius: 12px;
   object-fit: cover;
   background-color: #000;

   @media only screen and (max-width: 768px) {
      height: 50px;
   }
`;

const Content = styled.div`
   display: flex;
   flex-direction: column;
   width: 100%;
   position: relative;
`;

const TitleContainer = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
   width: 100%;
`;

const Title = styled.h3`
   font-size: 20px;
   font-weight: 600;
   color: ${({ theme }) => theme.text_primary};
   margin: 0;

   @media only screen and (max-width: 768px) {
      font-size: 18px;
   }
`;

const OpenIcon = styled.a`
   color: ${({ theme }) => theme.primary};
   font-size: 20px;
   margin-left: 8px;
   display: flex;
   align-items: center;
   text-decoration: none;

   &:hover {
      color: ${({ theme }) => theme.primary_dark};
   }
`;

const Description = styled.p`
   font-size: 15px;
   color: ${({ theme }) => theme.text_secondary};
   margin: 0;
   line-height: 1.5;

   @media only screen and (max-width: 768px) {
      font-size: 13px;
   }
`;

const CertificationCard = ({ certification }) => {
   return (
      <Container>
         <Header>
            {certification.logo && <Logo src={certification.logo} alt={`${certification.title} logo`} />}
            <Content>
               <TitleContainer>
                  <Title>{certification.title}</Title>
                  <OpenIcon
                     href={certification.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={`View certificate for ${certification.title}`}
                  >
                     <FiExternalLink />
                  </OpenIcon>
               </TitleContainer>
               <Description>{certification.description}</Description>
            </Content>
         </Header>
      </Container>
   );
};

export default CertificationCard;
