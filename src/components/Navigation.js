import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to="/episodes?page=1">
        <button>EPISODES</button>
      </Link>
      <Link to="/character?page=1">
        <button>CHARACTERS</button>
      </Link>
    </div>
  );
};

export default Navigation;
