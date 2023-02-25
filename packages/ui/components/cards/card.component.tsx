import React from "react";

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
  <div className={`card-container ${className ?? ""}`}>
    <h5 className="card-title">{title}</h5>
    <div>{children}</div>
  </div>
);
