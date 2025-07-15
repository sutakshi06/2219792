import React, { useState } from 'react';
import { loggingMiddleware } from '../LoggingMiddleware';

const UrlShortener = () => {
  const [url, setUrl] = useState('');
  const [shortened, setShortened] = useState('');

  const handleShorten = async () => {
    if (!url) return;

    const response = await loggingMiddleware('https://api.mocki.io/v2/549a5d8b', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ longUrl: url })
    });

    const data = await response.json();
    setShortened(`https://sho.rt/${Math.random().toString(36).substring(2, 7)}`);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter long URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        style={{ width: '100%', padding: '0.5rem', marginBottom: '1rem' }}
      />
      <button onClick={handleShorten}>Shorten</button>
      {shortened && <p>Shortened URL: <a href={url}>{shortened}</a></p>}
    </div>
  );
};

export default UrlShortener;
