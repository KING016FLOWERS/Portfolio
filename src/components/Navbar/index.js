import React from 'react';
import { Nav, NavLink, NavbarContainer, Span, NavLogo, NavItems, MobileIcon, MobileMenu, MobileLink } from './NavbarStyledComponent';
import { HiAcademicCap } from "react-icons/hi2";
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          {/* Replaced <a> with <button> for accessibility */}
          <button style={{ display: "flex", alignItems: "center", color: "white", marginBottom: '20px', cursor: 'pointer', background: 'none', border: 'none' }}>
            <HiAcademicCap size="3rem" /> <Span>Portfolio</Span>
          </button>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => setIsOpen(!isOpen)} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href="#skills">Skills</NavLink>
          <NavLink href="#experience">Experience</NavLink>
          <NavLink href="#projects">Projects</NavLink>
          <NavLink href="#education">Education</NavLink>
          <NavLink href="#certifications">Certifications</NavLink> 
          <NavLink href="#contact">Contact</NavLink> 
          
        </NavItems>
        
        {isOpen && (
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => setIsOpen(!isOpen)}>About</MobileLink>
            <MobileLink href="#skills" onClick={() => setIsOpen(!isOpen)}>Skills</MobileLink>
            <MobileLink href="#experience" onClick={() => setIsOpen(!isOpen)}>Internships</MobileLink>
            <MobileLink href="#projects" onClick={() => setIsOpen(!isOpen)}>Projects</MobileLink>
            <MobileLink href="#education" onClick={() => setIsOpen(!isOpen)}>Education</MobileLink>
            <MobileLink href="#certifications" onClick={() => setIsOpen(!isOpen)}>Certifications</MobileLink>
            <MobileLink href="#contact" onClick={() => setIsOpen(!isOpen)}>Contact</MobileLink> {/* Corrected this line */}
          </MobileMenu>
        )}
      </NavbarContainer>
    </Nav>
  );
};

export default Navbar;
