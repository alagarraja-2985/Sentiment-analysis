import React, { useState } from 'react';
import wordCloudImage from './assets/wordcloud.jpg'; // Make sure this path matches your image location

const ImageButton = () => {
  const [showImage, setShowImage] = useState(false);

  const handleClick = () => {
    setShowImage(true);
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        Show Word Cloud
      </button>

      {showImage && (
        <div style={{ marginTop: '20px' }}>
          <img src={wordCloudImage} alt="Word Cloud - Positive Cases" style={{ maxWidth: '100%', height: 'auto' }} />
        </div>
      )}
    </div>
  );
};

export default ImageButton;
