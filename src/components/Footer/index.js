import styled from 'styled-components';

const FooterContainer = styled.div`
  width: 100%;
  padding: 10px 40px; // Add some padding for space
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.background_secondary}; // Set background to straight color
`;

const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  align-items: center;
  padding: 1rem;
  color: ${({ theme }) => theme.text_primary};
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.soft2};
  text-align: center;
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        
        <Copyright>
          &copy; 2024 Developed by Poovarasan H.
        </Copyright>

      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;