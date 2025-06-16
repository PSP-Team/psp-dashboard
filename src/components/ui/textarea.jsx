// src/components/ui/textarea.jsx
import React from 'react';

export function Textarea({ value, onChange, placeholder, className }) {
  return (
    <textarea
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={`p-2 rounded border border-gray-300 ${className}`}
      rows={4}
    />
  );
}
