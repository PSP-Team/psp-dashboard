// src/components/ui/card.jsx

import React from 'react';

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-2xl p-4 shadow-md bg-white dark:bg-gray-900 ${className}`}>
      {children}
    </div>
  );
}
