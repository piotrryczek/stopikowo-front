import React from 'react';

const App = () => {
  return (
    <span>
      App
      {process.env.REACT_APP_API_URL}
    </span>
  );
}

export default App;
