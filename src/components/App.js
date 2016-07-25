import React from 'react';

// This wrapper could be used to add static components like a footer or a header
function App({ children }) {
  return <div>{children}</div>;
}

App.propTypes = {
  children: React.PropTypes.object.isRequired,
};

export default App;
