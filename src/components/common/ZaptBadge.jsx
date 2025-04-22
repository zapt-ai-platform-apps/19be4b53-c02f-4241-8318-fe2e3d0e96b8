import React from 'react';

const ZaptBadge = () => {
  return (
    <a 
      href="https://www.zapt.ai"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 left-4 z-50 bg-gray-800 text-white text-xs font-semibold py-1 px-2 rounded-md shadow-md transition-opacity hover:opacity-90"
    >
      Made on ZAPT
    </a>
  );
};

export default ZaptBadge;