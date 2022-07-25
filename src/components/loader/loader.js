import React from 'react';

const Loader = props => {
  const { loading } = { ...props }

  return loading ? (
    <div className="loader">
      <div className="loader-drop"></div>
      <div className=" spinner"></div>
    </div>
  ) : null;
}

export default Loader;