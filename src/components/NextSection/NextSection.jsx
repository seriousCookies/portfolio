import React from 'react';

import { Link } from 'react-scroll';

const NextSection = ({ section }) => {
  return (
    <span className="nav-to-section">
      <Link to={section} smooth duration={1000}>
        <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
      </Link>
    </span>
  );
};

export default NextSection;
