import React from 'react';

interface IContentProps {
  children: React.ReactNode;
}

export const Content: React.FC<IContentProps> = ({
  children,
}: IContentProps) => (
  <section className="p-4 sm:ml-64 h-screen">{children}</section>
);
