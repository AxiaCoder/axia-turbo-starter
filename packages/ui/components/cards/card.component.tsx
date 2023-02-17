import React from 'react';

interface CardProps {
  title: string;
  children: React.ReactNode;
  className?: string;
}

export const CardComponent: React.FC<CardProps> = ({
  title,
  children,
  className,
}: CardProps) => (
  <div
    className={`p-6 rounded-lg shadow bg-gray-800 border-gray-700 text-white ${className}`}
  >
    <h5 className="mb-2 text-2xl font-bold tracking-tight">{title}</h5>
    <div>{children}</div>
  </div>
);
