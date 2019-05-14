import React from 'react';
import { Link } from 'react-router-dom';

import CharacterList from '../CharacterList';
import EpisodeList from '../EpisodeList';
import LocationList from '../LocationList';

const Nav = () => (
  <div className="nav">
    <Link to="/characters" component={CharacterList}>
      Characters
    </Link>
    <Link to="/episodes" component={EpisodeList}>
      Episodes
    </Link>
    <Link to="/locations" component={LocationList}>
      Locations
    </Link>
  </div>
);

export default Nav;
