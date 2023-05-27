import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { StyledLogo, StyledNav } from '../Nav.style';

export const Nav: FC = () => {
  return (
    <StyledNav>
      <StyledLogo> LOGO</StyledLogo>
      <div>
        <Link to="/"> home</Link>
        <Link to="/story"> story</Link>
        <Link to="/about"> about</Link>
        <Link to="/lookbook"> look book</Link>
      </div>
    </StyledNav>
  );
};
