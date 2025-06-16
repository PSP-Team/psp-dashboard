// src/components/ui/card.jsx

export function Card({ children, className = "" }) {
  return (
    <div className={`rounded-2xl shadow-md p-4 bg-white dark:bg-gray-900 ${className}`}>
      {children}
    </div>
  );
}

export function CardContent({ children, className = "" }) {
  return <div className={`p-2 ${className}`}>{children}</div>;
}

export function CardHeader({ title, subtitle }) {
  return (
    <div className="mb-2">
      <h2 className="text-xl font-semibold">{title}</h2>
      {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
    </div>
  );
}
