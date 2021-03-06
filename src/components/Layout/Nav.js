import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => (
  <div className="nav">
    <Link to="/">Home</Link>
    <Link to="/characters">Characters</Link>
    <Link to="/episodes">Episodes</Link>
    <Link to="/locations">Locations</Link>
  </div>
);

export default Nav;
