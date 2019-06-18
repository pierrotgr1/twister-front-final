import React from "react";
import { Link } from 'react-router-dom';

const NotFound = () => {
  return(
    <div>
      <h1>Oups Not Found</h1>
      <Link to="/">Go Back to home page</Link>
    </div>
  );
};

export default NotFound;
