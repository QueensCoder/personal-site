import React from 'react';
import download from 'downloadjs';

const Resume = () => {
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          console.log('got clicked');
          const res = await fetch('/api/resume');
          const blob = await res.blob();
          download(blob, 'test.pdf');
        }}
      >
        Calculate data
      </button>
    </div>
  );
};

export default Resume;
