import React from 'react';
import { Navbar, Nav, Image } from 'react-bootstrap';
import styled from 'styled-components';

const NavBar = styled(Navbar)`
  ${({ mobile }) => mobile && `
    display: flex !important;
    flex-direction: column !important;
    height: 13vh !important;
  `}
`;

const BrandDiv = styled.div`
  flex-direction: row !important;
`;

const NavLink = styled(Nav.Link)`
  font-weight: bolder;
  color: ${({ active }) => active && active === true ? '#314155' : '#6E7C8E'} !important;
`;

const NavBlock = styled(Navbar.Collapse)`
  ${({ mobile }) => mobile && `
  display: flex;
  flex-direction: column;
  `}
`;

const NavItems = styled(Nav)`
  ${({ mobile }) => mobile && `
  display: flex !important;
  flex-direction: row !important;
  `}
`;

const Logo = require('../images/logo.png');

const isMobile = () => window.innerWidth < 790;

const Navigation = () => {
  const active = () => {
    if (window.location.href.includes('/photos')) return 'photos';
    else if (window.location.href.includes('/contact-us')) return 'contact';
    return 'home';
  };
  console.warn(window.innerWidth);

  return (
    <NavBar bg="light" >
      <BrandDiv>
      <Image src={Logo} className="navbar-logo" alt="Mid-South Concrete" />
        <a className="mr-0 navbar-title" href="/">Mid-South Concrete Design</a>
      </BrandDiv>
      <NavBlock id="basic-navbar-nav" >
        <NavItems className="mx-auto float-right" >
          <NavLink className="mx-4" active={active() === 'home'} href="/">Home</NavLink>
          <NavLink className="mx-4" active={active() === 'photos'} href="/photos">Photos</NavLink>
          <NavLink className="mx-4" active={active() === 'contact'} href="/contact-us">Contact Us</NavLink>
        </NavItems>
      </NavBlock>
    </NavBar>
  );
};

export default Navigation;