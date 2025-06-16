// src/components/ui/card.jsx

export function Card({ children, className = '' }) {
  return (
    <div className={`rounded-xl shadow-lg p-4 bg-white dark:bg-gray-800 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = '' }) {
  return (
    <div className={`p-2 ${className}`}>
      {children}
    </div>
  );
}
