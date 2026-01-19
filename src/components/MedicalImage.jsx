import React from 'react';
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';

export default function MedicalImage({ src, alt }) {
  return (
    <div style={{ margin: '20px 0', textAlign: 'center' }}>
      <Zoom>
        <img
          src={src}
          alt={alt}
          style={{
            width: '300px',
            borderRadius: '8px',
            cursor: 'zoom-in',
            boxShadow: '0 4px 12px rgba(0,0,0,0.2)'
          }}
        />
      </Zoom>
      <p style={{ fontSize: '14px', color: '#666', marginTop: '8px' }}>{alt}</p>
    </div>
  );
}
