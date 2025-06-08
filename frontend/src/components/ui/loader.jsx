// ------------------------------
// Loader.jsx
// ------------------------------
// Componente de loader animado com spin lento para indicar carregamento na UI
// ------------------------------

import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center h-24">
      <svg
        className="animate-spin-slow h-12 w-12 text-sky-600"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    </div>
  );
};

export default Loader;
