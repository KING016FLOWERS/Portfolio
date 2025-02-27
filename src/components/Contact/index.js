import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import emailjs from '@emailjs/browser';
import { Snackbar, Alert } from '@mui/material'; // Import Alert
import { Phone, Email } from '@mui/icons-material'; // Import icons from Material Icons
import { Bio } from '../../data/constants';
import LocationOnIcon from '@mui/icons-material/LocationOn';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
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
  padding: 10px 0px 100px 0px;
  gap: 12px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

const Title = styled.div`
  font-size: 42px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  max-width: 600px;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 16px;
  }
`;


const DetailsContainer = styled.div`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
    border: 0.1px solid #854CE6;
  margin-top: 28px;
  gap: 12px;
  transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px gray;
        transform: translateY(-5px);
    }
`;

const DetailItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactForm = styled.form`
  width: 95%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
    border: 0.1px solid #854CE6;
  margin-top: 28px;
  gap: 12px;
  transition: all 0.3s ease-in-out;
    &:hover{
        box-shadow: 0px 0px 20px gray;
        transform: translateY(-5px);
    }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(225deg, hsla(294, 100%, 50%, 1) 0%, hsla(271, 100%, 50%, 1) 100%);
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2);
  }

  &:active {
    transform: scale(0.98);
    background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  }
`;

const Contact = () => {
  const [open, setOpen] = useState(false); // Using useState from React
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_3evhxij', 'template_uigr1ij', form.current, '3O0GeApUVLPJZx_tG')
      .then((result) => {
        setOpen(true);
        form.current.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container id="contact">
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions!!!</Desc>
        <DetailsContainer>
          <DetailItem>
            <Phone style={{ marginRight: '10px' }} /> {/* Phone Icon */}
             {Bio.phone}
          </DetailItem>
          <DetailItem>
            <Email style={{ marginRight: '10px' }} />
             {Bio.email}
          </DetailItem>
          <DetailItem>
            <LocationOnIcon style={{ marginRight: '10px' }} />
             {Bio.location}
          </DetailItem>
        </DetailsContainer>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactTitle>Email Me 🚀</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton type="submit" value="Send" />
          
        </ContactForm>
        <Snackbar
  open={open}
  autoHideDuration={6000}
  onClose={handleClose}
  style={{ top: '100px' }} // Adjust the margin as needed
>
  <Alert onClose={handleClose} severity="success">
    Email sent successfully!
  </Alert>
</Snackbar>

      </Wrapper>
    </Container>
  );
};

export default Contact;
