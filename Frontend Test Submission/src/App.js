import React from 'react';
import UrlShortener from './components/UrlShortener';

function App() {
  return (
    <div style={{ padding: "2rem", maxWidth: "600px", margin: "auto" }}>
      <h1>React URL Shortener</h1>
      <UrlShortener />
    </div>
  );
}

export default App;
