import React from 'react';
import axios from 'axios';
import download from 'downloadjs';

const Resume = () => {
  return (
    <div>
      <button
        type="button"
        onClick={async () => {
          const res = await fetch('/api/resume'); //axios.get('/api/resume');
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
