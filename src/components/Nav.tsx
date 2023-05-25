import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Nav: FC = () => {
  return (
    <div>
      NAV
      <div>
        <Link to="/"> home</Link>
        <Link to="/story"> story</Link>
        <Link to="/about"> about</Link>
        <Link to="/lookbook"> look book</Link>
      </div>
    </div>
  );
};
